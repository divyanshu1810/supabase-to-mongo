import { Router } from "express";
import { upload } from "../multer";
import { getImages, healthCheck, uploadImage } from "./controller";

export const router = Router();

router.get("/api/healthcheck", healthCheck);
router.post("/api/upload", upload.single("image"), uploadImage);
router.get("/api/images", getImages);
