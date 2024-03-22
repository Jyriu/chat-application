import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
        max: 35,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlenght: 8,
    },
    gender: {
        type: String,
        required: true,
        enum:["male", "female"]
    },
    profilePicture: {
        type: String,
        default: "",
    },
});

const User = mongoose.model('User', userSchema);

export default User;