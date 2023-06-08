const Product = require("../models/products.model");


// Get all products
const getAllProducts = (req, res) => {
    Product.find()
    .then((allProducts) => {
        res.json(allProducts)
    })
    .catch((err) => {
        console.log(err)
    })
};

// Get one product
const getOneProduct = (req, res) => {
    console.log(req.params);
    Product.findById(req.params.id)
    .then((product) => {
        res.json(product)
    })
    .catch((err) => {
        console.log('you gotta error', err)
    })
};

// Create Product
const createProduct = (req, res) => {
    const {body} = req;
    Product.create(body)
    .then((newProduct) => {
        res.json(newProduct)
    })
    .catch((err) => {
        console.log(err)
    })
};

// Update Product
const updateProduct = (req, res) => {
    const {params} = req;
    Product.findOneAndUpdate({_id: params._id}, req.body, {
        new: true,
        runValidators: true,
    })
    .then((updatedProduct) => {
        res.json(updatedProduct)
    })
    .catch((err) => {
        console.log(err)
    })
};
// Delete Product
const deleteProduct = (req, res) => {
    const {params} = req;
    Product.deleteOne({_id: params._id})
    .then((result) => res.json(result))
    .catch((err) => {
        console.log(err);
    })
};

module.exports = {
    getAllProducts,
    createProduct,
    deleteProduct,
    getOneProduct,
    updateProduct
}