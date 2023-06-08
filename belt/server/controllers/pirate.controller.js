// CRUD

// import the model to use queries
const { Error } = require("mongoose");
const Pirate = require("../models/pirate.model");

module.exports = {
    // CREATE
    create: (req, res) => {
        console.log(req.body);
        Pirate.create(req.body)
        .then( newPirate => {
            console.log("DB SUCCESS, created new pirate!");
            return res.json(newPirate);
        })
        .catch((err) => {
            return res.status(400).json(err);
        })
    },

    // READ ONE
    readOne: (req, res) => {
        console.log(req.params);
        Pirate.findById(req.params.id)
        .then((pirate) => {
            res.json(pirate)
        })
        .catch((err) => {
            console.log("DB ERROR");
            return res.json(err)
        })
    },

    // READ ALL
    readAll: (req, res) => {
        Pirate.find()
        .then( (pirates) => {
            return res.json(pirates)
        })
        .catch((err) => {
            console.log("DB ERROR");
            return res.json(err)
        })
    },

    // UPDATE
    update: (req, res) => {
        console.log("Update ID is: ", req.params.id);
        console.log("Updated Object is: ", req.body);
        Pirate.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        .then((updatedPirate) => {
            return res.json(updatedPirate);
        })
        .catch((err) => {
            console.log("DB ERROR, did not update!!!");
            return res.status(400).json(err);
        })
    },

    // DELETE
    delete: (req, res) => {
        console.log("Deleting this ID: ", req.params.id);
        Pirate.findByIdAndDelete(req.params.id)
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            console.log("DB ERROR, did not delete!!!");
            return res.json(err)
        })
    }

}