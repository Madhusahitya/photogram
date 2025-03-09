
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  user: {
    id: String,
    username: String,
    avatar: String,
  },
  image: String,
  caption: String,
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 },
  timestamp: {
    type: Date,
    default: new Date(),
  },
  likedBy: [String], // Array of user IDs who liked the post
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
