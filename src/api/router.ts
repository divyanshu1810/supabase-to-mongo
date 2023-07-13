import { Router } from "express";
import { upload } from "../multer";
import {
  getImages,
  getImagesFromMongo,
  healthCheck,
  uploadImage,
  uploadImageURLToMongo,
  uploadImages,
  uploadImagesURLToMongo,
} from "./controller";

export const router = Router();
router.get("/api/healthcheck", healthCheck);

// Routes for uploading and fetching images to and from supabase
router.post("/api/upload", upload.single("image"), uploadImage);
router.post("/api/uploads", upload.array("images", 10), uploadImages);
router.get("/api/images", getImages);

// Routes for uploading and fetching images to and from supabase and mongoDB
router.post("/api/upload/mongo", upload.single("image"), uploadImageURLToMongo);
router.post(
  "/api/uploads/mongo",
  upload.array("images", 10),
  uploadImagesURLToMongo
);
router.get("/api/images/mongo", getImagesFromMongo);
