/*
File Name: COMP229_Lab1
Student Name: Wilson Yang
Student Numb: 301195179
Date: October 03, 2023
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Users Page' });
});

module.exports = router;
