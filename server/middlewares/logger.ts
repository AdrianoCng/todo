import { Request, Response, NextFunction } from 'express';
import winston from 'winston';

const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'production' ? 'warn' : 'debug',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new winston.transports.File({
      filename: './logs/errors.log',
      level: 'error',
      maxsize: 1000000, // 1MB
      maxFiles: 5,
      tailable: true,
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }),
        winston.format.json()
      ),
    }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
        winston.format.colorize({ all: true }),
        winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
      ),
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.File({
      level: 'debug',
      filename: './logs/app.log',
      maxsize: 1000000, // 1MB
      maxFiles: 5,
      format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
    })
  );
}

export default (req: Request, _: Response, next: NextFunction) => {
  logger.debug({
    method: req.method,
    url: req.originalUrl,
    headers: req.headers,
    query: req.query,
    body: req.body,
  });

  next();
};
