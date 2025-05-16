const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use((req, res, next) => {
  console.log(req.method);
  next();
});

// app.use((req, res, next) => {
//   res.send("<p>Mission successful</p>");
// });

app.get("/", (req, res, next) => {
  console.log("Handling / for GET method");
  res.send("<h1>Welcome to home page</h1>");
});

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET method");
  res.send(`
    <h1>Please give your details here</h1>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="Enter your name here">
    <input type="email" name="name" placeholder="Enter your email here">
    <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/contact-us", (req, res, next) => {
  res.send("<h1>Thanks for your details</h1>");
});

port = 2200;

app.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
});
