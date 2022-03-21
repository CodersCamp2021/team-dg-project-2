import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import { StatusCodes } from 'http-status-codes';

import User from '../models/userSchema';

const usersControllers = (router) => {
  // @desc Register user
  // @route POST /api/users
  router.post(
    '/users',
    asyncHandler(async (req, res) => {
      const { email, password, slug } = req.body;

      if (!email || !password || !slug) {
        res.status(StatusCodes.BAD_REQUEST).send({ error: 'Please add a text field' });
      }

      //  Check if user exist
      const userExists = await User.findOne({ email });

      if (userExists) {
        res.status(StatusCodes.BAD_REQUEST).send({ error: 'user already exists' });
      }

      //  Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create user
      const user = await User.create({
        email,
        password: hashedPassword,
        slug,
      });

      if (user) {
        res.status(StatusCodes.CREATED).send({
          _id: user.id,
          email: user.email,
          slug: user.slug,
        });
      } else {
        res.status(StatusCodes.BAD_REQUEST).send({ error: 'invalid user data' });
      }

      res.json({ message: 'register user' });
    })
  );

  // @desc Login user
  // @route POST /api/users/me
  router.post(
    '/users/login',
    asyncHandler(async (req, res) => {
      const { email, password } = req.body;

      // Check for user email
      const user = await User.findOne({ email });

      if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
          _id: user.id,
          email: user.email,
        });
      } else {
        res.status(StatusCodes.BAD_REQUEST).send({ error: 'invalid credentials' });
      }
    })
  );
};
export default usersControllers;
