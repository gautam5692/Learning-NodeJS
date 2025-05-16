const http = require("http");
const handler = require("./handler");

const server = http.createServer(handler);

const port = 2200;

server.listen(port, () => {
  console.log(`Server running onn address http://localhost:${port}`);
});
