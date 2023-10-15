/*
File Name: COMP229_Lab2
Student Name: Wilson Yang
Student Numb: 301195179
Date: October 15, 2023
*/

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  category: String
});

const Product = mongoose.model('Product', productSchema, 'product');

module.exports = Product;
