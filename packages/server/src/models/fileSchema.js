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

export default mongoose.model('File', fileSchema);
