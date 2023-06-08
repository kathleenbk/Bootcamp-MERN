// Controller is for CRUD

// import the model to use queries
const { Error } = require("mongoose");
const Player = require("../models/player.model");

module.exports = {
    // CREATE
    create: (req, res) => {
        console.log(req.body);
        Player.create(req.body)
        .then( newPlayer => {
            console.log("DB SUCCESS, created new player!");
            return res.json(newPlayer);
        })
        .catch((err) => {
            return res.status(400).json(err);
        })
    },

    // READ ONE
    readOne: (req, res) => {
        console.log(req.params);
        Player.findById(req.params.id)
        .then((player) => {
            res.json(player)
        })
        .catch((err) => {
            console.log("DB ERROR");
            return res.json(err)
        })
    },

    // READ ALL
    readAll: (req, res) => {
        Player.find()
        .then( (players) => {
            return res.json(players)
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
        Player.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        .then((updatedPlayer) => {
            return res.json(updatedPlayer);
        })
        .catch((err) => {
            console.log("DB ERROR, did not update!!!");
            return res.status(400).json(err);
        })
    },

    // DELETE
    delete: (req, res) => {
        console.log("Deleting this ID: ", req.params.id);
        Player.findByIdAndDelete(req.params.id)
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            console.log("DB ERROR, did not delete!!!");
            return res.json(err)
        })
    }

}