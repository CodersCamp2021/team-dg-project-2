import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';

import User from '../models/userSchema';

const usersControllers = (router) => {
  // @desc Register user
  // @route POST /api/users
  // @access Public
  router.post(
    '/users',
    asyncHandler(async (req, res) => {
      const { email, password, slug } = req.body;

      if (!email || !password || !slug) {
        res.status(StatusCodes.BAD_REQUEST).send({ error: 'Please add a text field' });
      }

      //  Check if user exist
      const userExists = await User.findOne({ email });
      const slugExists = await User.findOne({ slug });

      if (userExists || slugExists) {
        res.status(StatusCodes.BAD_REQUEST).send({ error: 'user or subdomain already exists' });
      }

      //  Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create user
      const user = await User.create({
        id: Object.id,
        email,
        password: hashedPassword,
        slug,
      });

      if (user) {
        res.status(StatusCodes.CREATED).send('User created successfully');
      } else {
        res.status(StatusCodes.BAD_REQUEST).send({ error: 'invalid user data' });
      }
      // This code leads to error, so I am commenting it out
      // res.json({ message: 'register user' });
    })
  );

  // @desc Login user
  // @route POST /api/users/login
  router.post(
    '/users/login',
    asyncHandler(async (req, res) => {
      const { email, password } = req.body;

      // Check for user email
      const user = await User.findOne({ email });

      if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
          id: user.id,
          email: user.email,
          // TODO - add token: TOKEN
        });
      } else {
        res.status(StatusCodes.BAD_REQUEST).send({ error: 'Invalid credentials' });
      }
    })
  );

  router.get(
    '/users/logout',
    asyncHandler(async (req, res) => {})
  );

  // @desc update user account info
  // @route PUT /api/users/:id
  // @access Private
  router.put(
    '/users/:id',
    asyncHandler(async (req, res) => {
      const { email, password, token } = req.body;

      const { id } = req.params;

      //  Check if user of that id exists
      const userExists = await User.findById({ _id: req.params.id });

      if (!userExists) {
        res.status(StatusCodes.BAD_REQUEST).send({ error: 'This user does not exist' });
        return;
      }

      //  Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Update user info
      await User.findOneAndUpdate(
        { _id: req.params.id },
        {
          email: req.body.email,
          password: hashedPassword,
          // TODO token
        },
        { new: true }
      );

      res.send({ message: `Below is your updated info`, email: req.body.email, password: "It's updated, trust us ;)" });
    })
  );

  // @desc delete user account info
  // @route DELETE /api/users/:id
  // @access Private
  router.delete(
    '/users/:id',
    asyncHandler(async (req, res) => {
      const { email, password, token } = req.body;

      // TODO check for token!!!

      //  Check if user of that id exists
      const user = await User.findById({ _id: req.params.id });

      if (!user) {
        res.status(StatusCodes.BAD_REQUEST).send({ error: 'This user does not exist' });
        return;
      }

      await user.remove();

      res.send({ message: `User with email: ${email} was removed` });
    })
  );
};
export default usersControllers;
