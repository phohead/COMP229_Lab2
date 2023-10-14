/*
File Name: COMP229_Lab2
Student Name: Wilson Yang
Student Numb: 301195179
Date: October 11, 2023
*/

const app = require('./app/app'); // Import the Express app directly from app.js

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
