import { NextFunction, Request, Response } from "express";

const trimStringProperties = (obj: any) => {
  if (obj !== null && typeof obj === "object") {
    for (const prop in obj) {
      if (typeof obj[prop] === "object") {
        return trimStringProperties(obj[prop]);
      }
      // if it's a string remove begin and end whitespaces
      if (typeof obj[prop] === "string") {
        obj[prop] = obj[prop].trim();
      }
    }
  }
};

export const trimInput = (req: Request, _res: Response, next: NextFunction) => {
  if (req.body) {
    trimStringProperties(req.body);
  }

  if (req.params) {
    trimStringProperties(req.params);
  }

  if (req.query) {
    trimStringProperties(req.query);
  }

  next();
};
