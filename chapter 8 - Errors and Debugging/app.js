const http = require("http");
// const testingSyntax = require("./Syntax_Error");
// const runtime = require("./Runtime_Error");
const logical = require("./Logical_Error");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // testingSyntax();
  // runtime();
  logical();
});

const port = 2201;
server.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
});
