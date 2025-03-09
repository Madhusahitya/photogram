
const express = require('express');
const { getPosts, getUserPosts, createPost, likePost } = require('../controllers/posts');

const router = express.Router();

router.get('/', getPosts);
router.get('/user/:userId', getUserPosts);
router.post('/', createPost);
router.patch('/:id/like', likePost);

module.exports = router;
