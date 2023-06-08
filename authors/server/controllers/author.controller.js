// Controller is for CRUD

// import the model to use queries
const { Error } = require("mongoose");
const Author = require("../models/author.model");

module.exports = {
    // CREATE
    create: (req, res) => {
        console.log(req.body);
        Author.create(req.body)
        .then( newAuthor => {
            console.log("DB SUCCESS, created new author!");
            return res.json(newAuthor);
        })
        .catch((err) => {
            return res.status(400).json(err);
        })
    },

    // READ ONE
    readOne: (req, res) => {
        console.log(req.params);
        Author.findById(req.params.id)
        .then((author) => {
            res.json(author)
        })
        .catch((err) => {
            console.log("DB ERROR");
            return res.json(err)
        })
    },

    // READ ALL
    readAll: (req, res) => {
        Author.find()
        .then( (authors) => {
            return res.json(authors)
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
        Author.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        .then((updatedAuthor) => {
            return res.json(updatedAuthor);
        })
        .catch((err) => {
            console.log("DB ERROR, did not update!!!");
            return res.status(400).json(err);
        })
    },

    // DELETE
    delete: (req, res) => {
        console.log("Deleting this ID: ", req.params.id);
        Author.findByIdAndDelete(req.params.id)
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            console.log("DB ERROR, did not delete!!!");
            return res.json(err)
        })
    }

}