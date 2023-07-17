import { NextFunction, Request, Response } from "express";
import { ERRORS } from "./errors";

export interface ApiError extends Error {
  message: string;
  statusCode?: number;
}

export const errorHandler = (
  error: ApiError,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(error.statusCode ?? ERRORS.SERVER_ERROR.code).json({
    success: false,
    message: error.message ?? ERRORS.SERVER_ERROR.message,
  });
};
