import { AppError } from "@/errors/appError";
import logger from "@/utils/logger";
import { NextFunction, Request, Response } from "express";

export default (
  err: AppError,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (!err.statusCode || err.statusCode >= 500) {
    logger.error(
      `${err.statusCode || 500} - ${err.message} - ${req.originalUrl} - ${
        req.method
      } - ${req.ip} - Stack: ${err.stack}`
    );
  }

  const errorDetails = {
    message: err.message || "An unexpected error occurred",
    data: err.data,
  };

  res.status(err.statusCode || 500);
  return res.json(errorDetails);
};
