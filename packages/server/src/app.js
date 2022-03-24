import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import env from './constants/env';
import routes from './controllers';

const app = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// allow cors for react app
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

// TODO change cors origin to array consisting of these links (after testing everything and making sure it works flawlessly!)
// https://thatsme-api-docs.netlify.app/
// https://thatsme.netlify.app/

// serving client files in production
if (env.NODE_ENV === 'production') {
  app.use(express.static('public'));
}

// gzip compression
app.use(compression());

// api routes
app.use('/api', routes);

export default app;
