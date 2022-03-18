import mongoose from 'mongoose';

const fileSchema = mongoose.Schema({
  file: {
    type: String,
    required: [true, 'Please provide photo only'],
  },
});

module.exports = mongoose.model('File', fileSchema);
