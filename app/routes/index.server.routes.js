/*
File Name: COMP229_Lab2
Student Name: Wilson Yang
Student Numb: 301195179
Date: October 15, 2023
*/


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { message: 'Welcome to the Marketplace application.' });
});

module.exports = router;
