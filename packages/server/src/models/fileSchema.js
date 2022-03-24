import mongoose from 'mongoose';

const fileSchema = mongoose.Schema({
  filePath: {
    type: Object,
    required: [true, 'Please provide photo only'],
  },
  name: {
    type: String,
    required: [true, 'Please file with a name'],
  },
  uploadSrc: {
    type: String,
  },
});

export default mongoose.model('File', fileSchema);
