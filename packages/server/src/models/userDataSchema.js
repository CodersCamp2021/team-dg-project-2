import mongoose from 'mongoose';

const userDataSchema = mongoose.Schema({
  slug: { type: String, required: false },
  name: { type: String, required: [true, 'Please provide a name'] },
  profession: { type: String, required: false },
  location: { type: String, required: false },
  description: { type: String, required: false },
  email: { type: String, required: false },
  twitterLink: { type: String, required: false },
  linkedInLink: { type: String, required: false },
  youTubeLink: { type: String, required: false },
  gitHubLink: { type: String, required: false },
});

module.exports = mongoose.model('UserData', userDataSchema);
