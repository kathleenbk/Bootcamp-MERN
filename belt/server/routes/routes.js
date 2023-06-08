const Pirate = require("../controllers/pirate.controller")

module.exports = (app) => {
    // CREATE NEW PIRATE
    app.post('/api/pirates', Pirate.create)

    // GET ALL PIRATES
    app.get('/api/pirates', Pirate.readAll)

    // GET ONE PIRATE
    app.get('/api/pirates/:id', Pirate.readOne)

    // UPDATE PIRATE
    app.put('/api/pirates/:id', Pirate.update)

    // DELETE PIRATE
    app.delete('/api/pirates/:id', Pirate.delete)
}