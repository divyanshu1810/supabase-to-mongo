import { Request, Response } from "express";
import { handleGetImages, handleUploaddImage } from "./service";

export const uploadImage = async (req: Request, res: Response) => {
  try {
    const file = req.file;
    if (!file) {
      res.status(400).send({ error: "No file uploaded" });
      return;
    }
    const data = await handleUploaddImage(file);
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

export const getImages = async (req: Request, res: Response) => {
  try {
    const data = await handleGetImages();
    res
      .status(200)
      .send({
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
