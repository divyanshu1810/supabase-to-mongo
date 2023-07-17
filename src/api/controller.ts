import { NextFunction, Request, Response } from "express";
import {
  handleGetImages,
  handleGetImagesURLFromMongo,
  handleUploadImage,
  handleUploadImageURLToMongo,
  handleUploadImages,
  handleUploadImagesURLToMongo,
} from "./service";
import { RESPONSES } from "../shared/constants";

export const healthCheck = (req: Request, res: Response) => {
  res.status(RESPONSES.HEALTH_CHECK.code).send({
    success: RESPONSES.HEALTH_CHECK.message.success,
    message: RESPONSES.HEALTH_CHECK.message.description,
  });
};

export const uploadImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const file = req.file;
    if (!file) {
      res.status(RESPONSES.NOFILEUPLOADED.code).send({
        succes: RESPONSES.NOFILEUPLOADED.message.success,
        error: RESPONSES.NOFILEUPLOADED.message.description,
      });
      return;
    }
    const data = await handleUploadImage(file);
    res.status(RESPONSES.UPLOADIMAGE.code).send({
      success: RESPONSES.UPLOADIMAGE.message.success,
      message: RESPONSES.UPLOADIMAGE.message.description,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const uploadImages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const files = req.files as Express.Multer.File[];
    if (!files || files.length == 0) {
      res.status(RESPONSES.NOFILEUPLOADED.code).send({
        success: RESPONSES.NOFILEUPLOADED.message.success,
        error: RESPONSES.NOFILEUPLOADED.message.description,
      });
    }
    const data = await handleUploadImages(files);
    res.status(RESPONSES.UPLOADIMAGES.code).send({
      success: RESPONSES.UPLOADIMAGES.message.success,
      message: `${files.length} ${RESPONSES.UPLOADIMAGES.message.description}`,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const getImages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await handleGetImages();
    res.status(RESPONSES.GETIMAGES.code).send({
      success: RESPONSES.GETIMAGES.message.success,
      message: RESPONSES.GETIMAGES.message.description,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const uploadImageURLToMongo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const file = req.file;
    if (!file) {
      res.status(RESPONSES.NOFILEUPLOADED.code).send({
        success: RESPONSES.NOFILEUPLOADED.message.success,
        error: RESPONSES.NOFILEUPLOADED.message.description,
      });
      return;
    }
    const data = await handleUploadImageURLToMongo(file);
    res.status(RESPONSES.UPLOADIMAGETOMONGO.code).send({
      success: RESPONSES.UPLOADIMAGETOMONGO.message.success,
      message: RESPONSES.UPLOADIMAGETOMONGO.message.description,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const uploadImagesURLToMongo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const files = req.files as Express.Multer.File[];
    if (!files || files.length == 0) {
      res.status(RESPONSES.NOFILEUPLOADED.code).send({
        success: RESPONSES.NOFILEUPLOADED.message.success,
        error: RESPONSES.NOFILEUPLOADED.message.description,
      });
    }
    const data = await handleUploadImagesURLToMongo(files);
    res.status(RESPONSES.UPLOADIMAGESTOMONGO.code).send({
      success: RESPONSES.UPLOADIMAGESTOMONGO.message.success,
      message: `${files.length} ${RESPONSES.UPLOADIMAGESTOMONGO.message.description}}`,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const getImagesFromMongo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await handleGetImagesURLFromMongo();
    res.status(RESPONSES.GETIMAGESFROMMONGO.code).send({
      success: RESPONSES.GETIMAGESFROMMONGO.message.success,
      message: RESPONSES.GETIMAGESFROMMONGO.message.description,
      data,
    });
  } catch (error) {
    next(error);
  }
};
