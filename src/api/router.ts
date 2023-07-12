import { Router } from "express";
import { uploadImages } from "./controller";

export const router = Router();
router.post("/uploads", uploadImages);
