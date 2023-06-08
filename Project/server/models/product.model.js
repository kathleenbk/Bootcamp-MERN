const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name:{
        type: String
    },
    type:{
        type: String
    },
    unscented:{
        type: Boolean
    },
    image:{
        type: String
    },
    price:{
        type: Number
    },
    weight:{
        type: Number,
    },
    description:{
        type: String
    },
    ingredients:{
        type: String,
    },
    quantity:{
        type: Number
    }

})

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
