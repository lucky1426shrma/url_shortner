import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minlength: [8,"password must be atleast 8 characters long"]
    }
},{timestamps: true});

export const User = mongoose.model("user",userSchema);

