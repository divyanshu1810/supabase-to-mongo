import config from "../config";
import database, { supabase } from "../database";
import { removeSpaces } from "../utils";

export const handleUploadImage = async (file: Express.Multer.File) => {
  const fileName = removeSpaces(file.originalname);
  const { data, error } = await supabase.storage
    .from(config.bucketName)
    .upload(fileName, file.buffer, {
      contentType: file.mimetype,
    });
  if (error) {
    throw new Error(error.message);
  }

  const url = `${config.databaseURL}/storage/v1/object/public/${config.bucketName}/${fileName}`;
  const dataWithUrl = { ...data, url };

  return dataWithUrl;
};

export const handleUploadImages = async (files: Express.Multer.File[]) => {
  const promises = [];
  for (const file of files) {
    const fileName = removeSpaces(file.originalname);
    const { data, error } = await supabase.storage
      .from(config.bucketName)
      .upload(fileName, file.buffer, {
        contentType: file.mimetype,
      });
    const url = `${config.databaseURL}/storage/v1/object/public/${config.bucketName}/${fileName}`;
    const dataWithUrl = { ...data, url };
    if (error) {
      throw new Error(error.message);
    }
    promises.push(dataWithUrl);
  }
  return promises;
};

export const handleGetImages = async () => {
  const { data, error } = await supabase.storage
    .from(config.bucketName)
    .list("");
  if (error) {
    throw new Error(error.message);
  }
  const images = data.filter(
    (object) => object.name !== ".emptyFolderPlaceholder"
  );
  const imageUrls = images.map((object) => ({
    ...object,
    url: `${config.databaseURL}/storage/v1/object/public/${config.bucketName}/${object.name}`,
  }));
  return imageUrls;
};

export const handleUploadImageURLToMongo = async (
  file: Express.Multer.File
) => {
  const fileName = removeSpaces(file.originalname);
  const { data, error } = await supabase.storage
    .from(config.bucketName)
    .upload(fileName, file.buffer, {
      contentType: file.mimetype,
    });
  if (error) {
    throw new Error(error.message);
  }

  const url = `${config.databaseURL}/storage/v1/object/public/${config.bucketName}/${fileName}`;
  const dataWithUrl = { ...data, url };

  const collection = (await database()).collection("ImageURL");
  await collection.insertOne(dataWithUrl);

  return dataWithUrl;
};

export const handleUploadImagesURLToMongo = async (
  files: Express.Multer.File[]
) => {
  const imagesData = [];
  const collection = (await database()).collection("ImageURL");
  for (const file of files) {
    const fileName = removeSpaces(file.originalname);
    const { data, error } = await supabase.storage
      .from(config.bucketName)
      .upload(fileName, file.buffer, {
        contentType: file.mimetype,
      });
    const url = `${config.databaseURL}/storage/v1/object/public/${config.bucketName}/${fileName}`;
    const dataWithUrl = { ...data, url };
    if (error) {
      throw new Error(error.message);
    }
    imagesData.push(dataWithUrl);
    await collection.insertOne(dataWithUrl);
  }
  return imagesData;
};

export const handleGetImagesURLFromMongo = async () => {
  const collection = (await database()).collection("ImageURL");
  return await collection.find({}).toArray();
};
