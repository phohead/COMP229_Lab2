/*
File Name: COMP229_Lab2
Student Name: Wilson Yang
Student Numb: 301195179
Date: October 15, 2023
*/

const Product = require('./product.model'); 

// GET: Get all Products
exports.getAllProducts = (req, res) => {
    Product.find()
        .then((products) => {
            res.json(products);
        })
};
    
// GET: Get Product by id
exports.getProductById = (req, res) => {
    const productId = req.params.id; 
  
    Product.findById(productId)
      .then((product) => {
        res.json(product);
      })
  };

// POST: Add new Product
exports.addProduct = (req, res) => {
    const product = new Product(req.body);
    product.save()
      .then((product) => res.json(product))
      .catch((err) => res.status(500).send(err));
};

// PUT: Update Product by id
exports.updateProduct = (req, res) => {
    const productId = req.params.id; 

    Product.findByIdAndUpdate(productId, req.body, { new: true })
      .then((product) => {
        res.json(product);
      })
};

// DELETE: Remove Product by id
exports.deleteProduct = (req, res) => {
    const productId = req.params.id; 

    Product.findByIdAndRemove(productId)
        .then((product) => {
          res.json({ message: 'Product deleted' });
        })
};

// DELETE: Remove all Products
exports.deleteAllProducts = (req, res) => {
    Product.deleteMany({})
      .then(() => {
        res.json({ message: 'All products deleted' });
      })
};
  
// GET: Find all Products by name  
exports.findProductsByName = (req, res) => {
    const kw = req.query.name; 
    Product.find({ kw: {$regex: "kw", $options: 'i' }})
        .then((products) => {
          res.json(products);
        })
};

