const mongoose = require('mongoose');

// Schema for the Profile Update
const profileUpdateSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  profilePic: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['GENERAL', 'SELLER'],  // Users can switch between these roles
    default: 'GENERAL',
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const ProfileUpdate = mongoose.model('ProfileUpdate', profileUpdateSchema);

module.exports = ProfileUpdate;
