// Express : A library that helps us make the http req/res cycle easier
const express = require("express");

const cors = require("cors");
const app = express();
const PORT = 8000;
const DB = "team_manager_db";

// Middleware
app.use(cors(), express.json(), express.urlencoded({extended: true}));

// Database Connection
require("./config/mongoose.config")(DB);


// Connect the routes
require("./routes/routes")(app);

// Start the server
app.listen(PORT, () => console.log(`Server up on port: ${PORT}!!!!!!`));

