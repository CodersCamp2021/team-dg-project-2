import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please add a email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
  },
  slug: {
    type: String,
    required: [true, 'Please provide slug'],
    unique: true,
  },
});

module.exports = mongoose.model('User', userSchema);
