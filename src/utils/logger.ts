import { Environments } from '@/config';
import winston, { format } from 'winston';

const { timestamp, printf } = format;

const logFormat = printf((info) => {
  return `${info.timestamp} [${info.level}]: ${info.message}`;
});

const logger = winston.createLogger({
  format: winston.format.combine(timestamp(), winston.format.json()),
  transports: [
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
      silent: Environments.DEVELOPMENT === process.env.NODE_ENV
    }),
    new winston.transports.File({
      filename: 'logs/combined.log',
      silent: Environments.DEVELOPMENT === process.env.NODE_ENV
    })
  ]
});

if (process.env.NODE_ENV !== Environments.PRODUCTION) {
  logger.add(
    new winston.transports.Console({
      silent: false,
      format: winston.format.combine(winston.format.colorize(), logFormat)
    })
  );
}

export default logger;
