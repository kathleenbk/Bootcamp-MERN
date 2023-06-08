const JokeController = require("../controllers/jokes.controller");

module.exports = (app) => {
    app.get('/api/jokes', JokeController.getAllJokes);
    app.get('/api/jokes/:_id', JokeController.getOneJoke);
    app.post('/api/jokes/new', JokeController.createJoke);
    app.put('/api/jokes/update/:_id', JokeController.updateJoke);
    app.delete('/api/jokes/delete/:_id', JokeController.deleteJoke);
};