const mongoose = require("mongoose");

// Create Schema
const PirateSchema = new mongoose.Schema({
    // PIRATE NAME
    name:{
        type: String,
        required: [true, "Name must be present"],
        minlength: [3, "Name must be at least 3 characters long.  "]
    },
    // IMAGE URL
    image:{
        type: String,
        required: [true, "Image URL must be present.  "],
        minlength: [3, "Image URL must be at least 3 characters long.  "]
    },
    // # OF TREASURE CHESTS
    chests:{
        type: Number,
        required: [true, "# of Treasure Chests must be present.  "],
    },
    // PIRATE CATCH PHRASE
    phrase:{
        type: String,
        required: [true, "Pirate Catch Phrase must be present.  "],
        minlength: [3, "Pirate Catch Phrase must be at least 3 characters long.  "]
    },
    // CREW POSITION
    position:{
        type: String,
        required: [true, " Crew Position must be present.  "],
    },
    // TRAITS
    traits:{
        pegLeg:{type: Boolean, required: [false], default: true},
        eyePatch:{type: Boolean, required: [false], default: true},
        hookHand:{type: Boolean, required: [false], default: true},
    }

}, {timestamps: true})

// Export - Create Schema
const Pirate = mongoose.model("Pirate", PirateSchema);
module.exports = Pirate;