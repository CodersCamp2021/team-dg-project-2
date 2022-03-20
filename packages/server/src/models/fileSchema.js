import mongoose from 'mongoose';

const fileSchema = mongoose.Schema({
  filePath: {
    type: Object,
    required: [true, 'Please provide photo only'],
  },
  name: {
    type: String,
    required: [true, 'Please provide photo only'],
  },
});

module.exports = mongoose.model('File', fileSchema);
