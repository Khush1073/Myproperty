// db/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    loginusername: {
        type: String,
        required: true, // This is what's causing the error
        unique: true, // You might also have a unique constraint
        trim: true,
        lowercase: true,
      },
      password: {
        type: String,
        required: true,
      },
});

const User = mongoose.model('user', userSchema);

export default User;
