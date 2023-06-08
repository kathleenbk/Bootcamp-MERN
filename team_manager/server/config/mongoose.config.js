// Use mongoose (connector) to connect us to MongoDB
const mongoose = require("mongoose");

module.exports = (DB) => {
    mongoose.connect(`mongodb://localhost/${DB}`)
    .then(() => console.log(`connected to ${DB}`))
    .catch(() => console.log(err))
}