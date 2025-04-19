import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import User from '../db/User.js'; // Ensure this path is correct

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Your React app
  methods: ['GET', 'POST'],
}));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/myproperty')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

// Login Route (to save data)
app.post('/login', async (req, res) => {
  try {
      const { loginusername, password } = req.body; // Change to password (consistent with schema)
      console.log(req.body)
      const newUser = new User({ loginusername: loginusername, password: password });
      const savedUser = await newUser.save();

      res.status(201).json({
          message: 'User data saved successfully',
          savedData: savedUser,
      });
  } catch (error) {
      console.error('Error saving user:', error);
      res.status(500).json({ error: 'Failed to save user' });
  }
});

// Start server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
