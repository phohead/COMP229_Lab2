/*
File Name: COMP229_Lab2
Student Name: Wilson Yang
Student Numb: 301195179
Date: October 11, 2023
*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var mongoose = require("mongoose")

const { MongoClient, ServerApiVersion } = require('mongodb');
//const uri = "mongodb+srv://wyang72:yLXqGWhfjp6BZufT@cluster0.lydchyu.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb+srv://wyang72-2:5WutioTGUowZRmq9@cluster0.lydchyu.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


var indexRouter = require('./routes/index.server.routes');
var usersRouter = require('./routes/users');
const productRouter = require('./api/product.server.routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use('/', require('../app/routes/index.server.routes.js'));

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./public'));
app.use(express.static("./node_modules"));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/products', productRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


