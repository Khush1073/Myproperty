import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    loginusername: { type: String, required: true },
    loginPassword: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);
export default User;
