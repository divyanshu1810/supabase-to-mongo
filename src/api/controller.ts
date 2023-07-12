import { Request, Response } from "express";
import {
  handleGetImages,
  handleUploadImage,
  handleUploadImages,
} from "./service";

export const healthCheck = (req: Request, res: Response) => {
  res.status(200).send({
    success: true,
    message: "Server is running",
  });
};

export const uploadImage = async (req: Request, res: Response) => {
  try {
    const file = req.file;
    if (!file) {
      res.status(400).send({ error: "No file uploaded" });
      return;
    }
    const data = await handleUploadImage(file);
    res
      .status(200)
      .json({ success: true, message: "Image uploaded successfully", data });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: "Unable to upload Image",
    });
  }
};

export const uploadImages = async (req: Request, res: Response) => {
  try {
    const files = req.files as Express.Multer.File[];
    if (!files || files.length == 0) {
      res.status(400).send({ success: false, error: "No file uploaded" });
    }
    const data = await handleUploadImages(files);
    res.status(200).json({
      success: true,
      message: `${files.length} Images uploaded successfully`,
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: "Unable to upload Images",
    });
  }
};

export const getImages = async (req: Request, res: Response) => {
  try {
    const data = await handleGetImages();
    res.status(200).send({
      success: true,
      message: "All images fetched successfully",
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: "Internal server error",
    });
  }
};
