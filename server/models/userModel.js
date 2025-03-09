
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  avatar: { type: String, default: '/placeholder.svg' },
  bio: { type: String, default: '' },
  email: { type: String, required: true, unique: true },
  posts: { type: Number, default: 0 },
  followers: { type: Number, default: 0 },
  following: { type: Number, default: 0 },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
