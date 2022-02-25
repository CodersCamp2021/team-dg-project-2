import { StatusCodes } from 'http-status-codes';

const pingControllers = (router) => {
  router.get('/ping', (_req, res) => {
    res.status(StatusCodes.OK).send({ ping: 'pong' });
  });
};

export default pingControllers;
