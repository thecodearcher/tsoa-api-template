import { Environments, NODE_ENV } from "@/config";
import logger from "@/utils/logger";
import cors from "cors";
import { Express, json, urlencoded } from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import morganLogger from "morgan";
import errorHandler from "./errorHandler";
import { trimInput } from "./trimInput";

export default (app: Express) => {
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    })
  );

  app.use(
    cors({
      origin: "*",
      maxAge: 1728000,
    })
  );
  app.use(
    urlencoded({
      extended: true,
    })
  );
  app.use(json());
  app.use(
    helmet({ contentSecurityPolicy: NODE_ENV === Environments.PRODUCTION })
  );
  app.use(morganLogger("dev"));
  app.use(trimInput);
};

// Error handlers
export const RegisterErrorHandlerMiddleware = (app: Express) => {
  process.on("unhandledRejection", (reason, _promise) => {
    throw reason;
  });

  process.on("uncaughtException", (error) => {
    logger.error(
      `Uncaught Exception: ${500} - ${error.message}, Stack: ${error.stack}`
    );
    process.exit(1);
  });

  process.on("SIGINT", () => {
    logger.info(" Alright! Bye bye!");
    process.exit();
  });

  app.use(errorHandler);
};
