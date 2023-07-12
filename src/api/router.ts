import { Router } from "express";
import { upload } from "../multer";
import {
  getImages,
  healthCheck,
  uploadImage,
  uploadImages,
} from "./controller";

export const router = Router();

router.get("/api/healthcheck", healthCheck);
router.post("/api/upload", upload.single("image"), uploadImage);
router.post("/api/uploads", upload.array("images", 10), uploadImages);
router.get("/api/images", getImages);
