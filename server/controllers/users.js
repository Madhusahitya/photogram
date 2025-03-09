
const User = require('../models/userModel');

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get a single user
exports.getUser = async (req, res) => {
  const { id } = req.params;
  
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get current user (for profile)
exports.getCurrentUser = async (req, res) => {
  try {
    // In a real app, this would use authentication
    // For now, we'll return the first user as the current user
    const currentUser = await User.findOne();
    res.status(200).json(currentUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
