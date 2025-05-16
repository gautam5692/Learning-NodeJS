// const http = require("http"); // core module

const express = require("express"); // external module

const requestHanndler = require("./user"); // local module

const app = express();

app.use("/", (req, res, next) => {
  console.log("Came in first middle ware", req.url, req.method);
  // res.send("<p>I am at home page</p>");
  next();
});

app.use("/submit-details", (req, res, next) => {
  console.log("Came in second middle ware", req.url, req.method);
  res.send("<p>Welcome to complete coding nodejs series</p>");
});

// const server = http.createServer(app);

const port = 2200;
app.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
});
