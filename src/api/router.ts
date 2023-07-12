import { Router } from "express";
import { upload } from "../multer";
import { getImages, uploadImage } from "./controller";

export const router = Router();
router.post("/api/upload", upload.single("image"), uploadImage);
router.get("/api/images", getImages);
