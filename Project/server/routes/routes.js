const Product = require('../controllers/product.controller')


module.exports = (app) => {
    // CREATE
    app.post('/api/products', Product.create)

    // GET ALL
    app.get('/api/products', Product.readAll)

    // GET ONE
    app.get('/api/products/:id', Product.readOne)

    // GET ALL WITH IDS
    app.get('/api/products/cart/:ids', Product.readAllFiltered)

    // UPDATE
    app.put('/api/products/:id', Product.update)

    // DELETE
    app.delete('/api.products/:id', Product.delete)
}

// module.exports = (app) => {
//     // CREATE
//     app.post('/api/cart', Cart.create)

//     // GET ALL
//     app.get('/api/cart', Cart.readAll)

//     // GET ONE
//     app.get('/api/cart/:id', Cart.readOne)

//     // UPDATE
//     app.put('/api/cart/:id', Cart.update)

//     // DELETE
//     app.delete('/api.cart/:id', Cart.delete)

// }