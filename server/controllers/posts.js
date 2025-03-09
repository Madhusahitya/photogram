
const Post = require('../models/postModel');

// Get all posts (feed)
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ timestamp: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get posts by user
exports.getUserPosts = async (req, res) => {
  const { userId } = req.params;
  
  try {
    const posts = await Post.find({ 'user.id': userId });
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Create a post
exports.createPost = async (req, res) => {
  const post = req.body;
  
  const newPost = new Post(post);
  
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Like a post
exports.likePost = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  
  try {
    const post = await Post.findById(id);
    
    const index = post.likedBy.findIndex((id) => id === userId);
    
    if (index === -1) {
      // Like the post
      post.likedBy.push(userId);
      post.likes += 1;
    } else {
      // Unlike the post
      post.likedBy = post.likedBy.filter((id) => id !== userId);
      post.likes -= 1;
    }
    
    const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });
    
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
