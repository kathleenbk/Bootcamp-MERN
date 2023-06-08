const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const DB_NAME = "products_db";

app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }));

require ('./server/config/mongoose.config');



const ProductRoutes = require('./server/routes/products.routes');
ProductRoutes(app);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});