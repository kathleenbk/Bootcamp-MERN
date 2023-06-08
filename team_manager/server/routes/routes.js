const Player = require("../controllers/player.controller")

module.exports = (app) => {
    app.post('/api/players', Player.create)
    app.get('/api/players', Player.readAll)
    app.get('/api/players/:id', Player.readOne)
    app.put('/api/players/:id', Player.update)
    app.delete('/api/players/:id', Player.delete)
}