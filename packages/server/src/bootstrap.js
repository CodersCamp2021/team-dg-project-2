import fs from 'fs';
import mongoose from 'mongoose';

import app from './app';
import env from './constants/env';
import logger from './utils/logger';

if (process.env.CA_CERT) {
  fs.writeFileSync('ca_cert.crt', process.env.CA_CERT);
}

const dbConfig =
  env.NODE_ENV === 'production'
    ? {
        ssl: true,
        sslCA: 'ca_cert.crt',
      }
    : { dbName: 'local-project-db' };

let server;

mongoose.connect(env.MONGODB_URL, dbConfig).then(() => {
  logger.info('Connected to MongoDB');

  server = app.listen(env.PORT, () => {
    logger.info(`Listening to port ${env.PORT}`);
  });
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');

  if (server) {
    server.close();
  }
});
