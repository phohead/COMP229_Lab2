const express = require('express');
const router = express.Router();
const controller = require('./product.controller'); 

router.get('/', controller.getAllProducts); // Get all products
router.get('/:id', controller.getProductById); // Get product by ID
router.post('/', controller.addProduct); // Add new product
router.put('/:id', controller.updateProduct); // Update product by ID
router.delete('/:id', controller.deleteProduct); // Delete product by ID
router.delete('/', controller.deleteAllProducts); // Delete all products
router.get('/search', controller.findProductsByName); // Find products by name

module.exports = router;
