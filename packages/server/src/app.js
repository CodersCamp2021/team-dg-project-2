import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import helmet from 'helmet';
import passport from 'passport';

import env from './constants/env';
import routes from './controllers';
import passportConfig from './utils/passportConfig';

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

// session middleware
app.use(
  session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser('secretcode'));
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);

// serving client files in production
if (env.NODE_ENV === 'production') {
  app.use(express.static('public'));
}

// gzip compression
app.use(compression());

// api routes
app.use('/api', routes);

export default app;
