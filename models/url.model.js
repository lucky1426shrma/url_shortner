import mongoose from "mongoose";

// url schema 
const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },

    redirectedURL: {
        type: String,
        required: true,
    },

    // 
    visitHistory: [{
        time:{
            type: Number,
        }
    }]
},{timestamps : true});

export const URL = mongoose.model('url',urlSchema);

