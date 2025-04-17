import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import User from '../db/User.js'; // Ensure this path is correct and User.js uses ES module syntax

const app = express();



// Middleware to parse JSON bodies
app.use(express.json());
app.use(
  cors({
      origin: 'http://localhost:5173', // Replace with your React app's URL
      methods: ['GET', 'POST'],
  })
);


// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/myproperty', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

// Register route
app.post('/register', async (req, res) => {
  try {
    let user = new User(req.body);
    let result = await user.save();
    
    // Respond with meaningful data
    res.status(201).json({
      message: "User registered successfully!",
      receivedData: req.body, // Send back the received data for debugging
      savedData: result, // Send saved user data for confirmation
    });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'Failed to register user' });
  }
});
