import config from "../config";
import { supabase } from "../database";
import { removeSpaces } from "../utils";

export const handleUploaddImage = async (file: Express.Multer.File) => {
  const fileName = removeSpaces(file.originalname);
  const { data, error } = await await supabase.storage
    .from(config.bucketName)
    .upload(fileName, file.buffer, {
      contentType: file.mimetype,
    });
  if (error) {
    throw new Error(error.message);
  }
  return data;
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
