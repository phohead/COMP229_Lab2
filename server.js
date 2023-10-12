/*
File Name: COMP229_Lab1
Student Name: Wilson Yang
Student Numb: 301195179
Date: October 11, 2023


// Import 'app' module from './app/app'
const app = require('./app/app');

// Define port number
const port = process.env.PORT || 3000;

// Start Express Server and listen on specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


var express = require('./app')
var app = express();
app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000');
*/

const app = require('./app/app'); // Import the Express app directly from app.js

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
