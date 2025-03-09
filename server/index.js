
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const postsRoutes = require('./routes/posts');
const usersRoutes = require('./routes/users');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Routes
app.use('/api/posts', postsRoutes);
app.use('/api/users', usersRoutes);

app.get('/', (req, res) => {
  res.send('Instagram Clone API is running');
});

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/instagram-clone')
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((error) => console.error('Error connecting to MongoDB:', error.message));
