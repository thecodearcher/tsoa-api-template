import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "../build/routes";
import RegisterMiddlewares, {
  RegisterErrorHandlerMiddleware,
} from "./middlewares";

export const app = express();
app.disable("x-powered-by");

RegisterMiddlewares(app);

app.use("/docs", swaggerUi.serve, async (_req: Request, res: Response) => {
  const swaggerDoc = await import("../build/swagger.json");
  return res.send(swaggerUi.generateHTML(swaggerDoc));
});

RegisterRoutes(app);
RegisterErrorHandlerMiddleware(app);
