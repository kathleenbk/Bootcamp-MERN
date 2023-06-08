const mongoose = require("mongoose");

// Create Schema
const AuthorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name must be present"],
        minlength: [3, "Name must be at least 3 characters long."]
    }
}, {timestamps: true})

// Export - Create Schema
const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;