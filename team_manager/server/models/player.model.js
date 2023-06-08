const mongoose = require("mongoose");

// Create Schema
const PlayerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name must be present."],
        minlength: [3, "Name must be at least 3 characters long."]
    },
    position:{
        type: String,
        required: [false],
        default: "None"
    },
    status:{
        game1status: {type: String, required: [false], default: "Not Playing"},
        game2status: {type: String, required: [false], default: "Not Playing"},
        game3status: {type: String, required: [false], default: "Not Playing"},
        
    }

}, {timestamps: true})

// Export - Create Schema
const Player = mongoose.model("Player", PlayerSchema);
module.exports = Player;