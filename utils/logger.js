import fs from 'fs';
import path from 'path';
import winston from 'winston';

const logsDir = path.resolve(process.cwd(), 'logs');

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

export const log = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
    }),
    new winston.transports.File({
      level: 'debug',
      format: winston.format.simple(),
      filename: path.join(logsDir, `${new Date().toISOString().replace(/:/g, '-')}.log`),
    }),
  ],
});
