import dotenv from "dotenv";

dotenv.config();

export enum Environments {
  DEVELOPMENT = "development",
  PRODUCTION = "production",
  TEST = "test",
}

export const PORT = process.env.PORT || 3000;
export const NODE_ENV: Environments =
  (process.env.NODE_ENV as Environments) || Environments.DEVELOPMENT;
