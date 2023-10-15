/*
File Name: COMP229_Lab2
Student Name: Wilson Yang
Student Numb: 301195179
Date: October 15, 2023
*/

const express = require('express');
const router = express.Router();
const controller = require('./product.controller'); 

router.get('/', controller.getAllProducts); 
router.get('/:id', controller.getProductById); 
router.post('/', controller.addProduct); 
router.put('/:id', controller.updateProduct); 
router.delete('/:id', controller.deleteProduct); 
router.delete('/', controller.deleteAllProducts); 
router.get('/', controller.findProductsByName); 

module.exports = router;
