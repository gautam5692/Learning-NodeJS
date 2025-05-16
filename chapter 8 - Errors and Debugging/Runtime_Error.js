// RunTime Error - Not syntax error but the given instruction is not possible

const runtime = () => {
  console.log(x); // x not defined
  x(); // x is not a function
};

module.exports = runtime;

// For example -

// Reference Error (x is not defined)
// console.log(x);

// Type error (num is not a function)
// let num = 10;
// num()

// Invalid JSON parse { Syntax Error }
// let jsonString = "{name: 'John'}"; // Invalid JSON (single quotes)
// let jsonString = '{"name": "John"}'; // This is correct syntax
// JSON.parse(jsonString);

// File not found error (fs module)
// const fs = require("fs");
// fs.readFile("nonexistentFile.txt");
