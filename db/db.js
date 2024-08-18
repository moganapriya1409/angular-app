const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/new_database';  // Replace with your MongoDB connection string

async function connectToDatabase() {
  try {
    await mongoose.connect(uri, {
      // No need for useNewUrlParser and useUnifiedTopology
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Connection error', err);
  }
}

module.exports = { connectToDatabase };
