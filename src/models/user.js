const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Email is Invalid")
            }
        }
    },
    password: {
        type: String,
        trim: true,
        minlength: 7,
        validate(value){
            value.toLowerCase()
            if(value.includes("password")) {
                throw new Error("Password cannot contain the word password.")
            }
        }
    }
});

module.exports = User