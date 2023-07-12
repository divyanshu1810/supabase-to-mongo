import { handleUploadImages } from "./service";

export const uploadImages = async (req, res) => {
  try {
    const data = await handleUploadImages();
    res.status(200).send({
      status: 200,
      message: "Images uploaded successfully",
      data,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: error.message,
    });
  }
};
