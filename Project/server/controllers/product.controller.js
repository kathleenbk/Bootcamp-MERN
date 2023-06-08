// CRUD

// import the model to use queries

const Product = require("../models/product.model");

module.exports = {
    // CREATE
    create: (req, res) => {
        console.log(req.body);
        Product.create(req.body)
        .then( newProduct => {
            console.log("DB SUCCESS, created new product!");
            return res.json(newProduct);
        })
        .catch((err) => {
            return res.status(400).json(err);
        })
    },

    // READ ONE
    readOne: (req, res) => {
        console.log(req.params);
        Product.findById(req.params.id)
        .then((product) => {
            res.json(product)
        })
        .catch((err) => {
            console.log("DB ERROR");
            return res.json(err)
        })
    },

    // READ ALL
    readAll: (req, res) => {
        Product.find()
        .then( (products) => {
            return res.json(products)
        })
        .catch((err) => {
            console.log("DB ERROR");
            return res.json(err)
        })
    },

    // READ ALL MATCHING ARRAY OF IDS
    readAllFiltered: (req, res) => {
        Product.find({_id: {$in: req.params.ids}})
        .then( (products) => {
            return res.json(products)
        })
        .catch((err) => {
            console.log(err)
        })
    },

    // UPDATE
    update: (req, res) => {
        console.log("Update ID is: ", req.params.id);
        console.log("Updated Object is: ", req.body);
        Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        .then((updatedProduct) => {
            return res.json(updatedProduct);
        })
        .catch((err) => {
            console.log("DB ERROR, did not update!!!");
            return res.status(400).json(err);
        })
    },

    // // DELETE
    delete: (req, res) => {
        console.log("Deleting this ID: ", req.params.id);
        Product.findByIdAndDelete(req.params.id)
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            console.log("DB ERROR, did not delete!!!");
            return res.json(err)
        })
    }

}