
const express = require('express');
const { getUsers, getUser, getCurrentUser } = require('../controllers/users');

const router = express.Router();

router.get('/', getUsers);
router.get('/me', getCurrentUser);
router.get('/:id', getUser);

module.exports = router;
