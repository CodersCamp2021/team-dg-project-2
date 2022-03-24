import asyncHandler from 'express-async-handler';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';

import User from '../models/userSchema';

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startswith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];
      //   Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //  Get user from the token
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      console.log(error);
      res.status(StatusCodes.UNAUTHORIZED).send({ error: 'Not authorized' });
    }
  }

  if (!token) {
    res.status(StatusCodes.UNAUTHORIZED).send({ error: 'Not authorized - no token' });
  }
});

export default protect;
