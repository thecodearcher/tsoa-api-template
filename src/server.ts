import { app } from "./app";
import { NODE_ENV, PORT } from "./config";
import logger from "./utils/logger";

const port = PORT;

app.listen(port, () => {
  logger.info(`${NODE_ENV} app listening on port ${port}`);
});
