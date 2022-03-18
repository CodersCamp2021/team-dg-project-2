import { StatusCodes } from 'http-status-codes';

const User = require('../models/userSchema');

const usersControllers = (router) => {
  // @desc show users
  // @route GET /api/users
  // @access Private
  router.get('/users', async (_req, res) => {
    const user = await User.find({
      email: _req.body.email,
      password: _req.body.password,
    });

    res.status(200).json(user);
  });

  // @desc Create user
  // @route POST /api/users
  // @access Public
  router.post('/users', async (_req, res) => {
    // it works but not fully
    // if (!_req.body.email || !_req.body.password || !_req.body.slug) {
    //   res.status(400).json({ error: 'Info mate' });
    //   throw new Error('Please provide info');
    // }

    const thisUserId = Math.round(Math.random() * 1000000000000);

    const user = await User.create({
      email: _req.body.email,
      password: _req.body.password,
      slug: _req.body.slug,
    });

    res.status(200).json(user);
  });
};

export default usersControllers;
