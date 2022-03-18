import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  id: {
    type: Number,
    required: [true, 'Please provide username'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide username'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
  },
  slug: {
    type: String,
    required: [true, 'Please provide password'],
    unique: true,
  },
});

module.exports = mongoose.model('User', userSchema);
