const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/user'); // Assuming you have a User model
const { connectToDatabase } = require('./db/db');  // Adjust path as needed

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
connectToDatabase();  // Use the connection function from db.js

// User registration
app.post('/api/users/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Registration failed', error });
  }
});

// User login
app.post('/api/users/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.status(200).send({ message: 'Login successful' });
    } else {
      res.status(401).send({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Login failed', error });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
