const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
});

const port = 2201;
server.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
});
