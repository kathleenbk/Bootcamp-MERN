
const Joke = require("../models/jokes.model");

// Get all jokes
const getAllJokes = (req, res) => {
    Joke.find()
    .then((allJokes) => {
        res.json(allJokes)
    })
    .catch((err) => {
        console.log(err)});
};

// Get a single joke
const getOneJoke = (req, res) => {
    const {params} = req;
    Joke.findOne({_id: params._id})
    .then((joke) =>{
        res.json(joke)
    }).catch((err => {
        console.log(err)
    }))
};

// Create a joke
const createJoke = (req, res) => {
    const {body} = req;
    Joke.create(body)
    .then((newJoke) => {
        res.json(newJoke)
    })
    .catch((err) => {
        console.log(err);
    })
};

// Update a joke
const updateJoke = (req, res) => {
    const {params} = req;
    Joke.findOneAndUpdate({_id: params._id}, req.body, {
        new : true,
        runValidators: true,
    })
    .then((updatedJoke => {
        res.json(updatedJoke)
    }))
    .catch((err) => {
        console.log(err)
    })
};

// Delete a joke
const deleteJoke = (req, res) => {
    const {params} = req;
    Joke.deleteOne({_id: params._id})
    .then((result) => res.json(result))
    .catch((err) => {
        console.log(err);
    })
};

module.exports = {
    getAllJokes,
    getOneJoke,
    createJoke,
    updateJoke,
    deleteJoke
};