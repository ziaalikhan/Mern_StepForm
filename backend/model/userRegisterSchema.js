const mongoose = require("mongoose");


const registerUser = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    skills: {
        type: Array,
        required: true
    }

}, { timestamps: true });

const register_User = mongoose.model("userDetails", registerUser);

module.exports = register_User;