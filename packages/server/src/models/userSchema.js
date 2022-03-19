/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please add a email'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please add a password']
  },
})

module.exports = mongoose.model('User', userSchema);
