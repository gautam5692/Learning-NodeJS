const http = require("http");
const reqHandler = require("./export_module"); // imprting local modules

const server = http.createServer(reqHandler);

const port = 2200;

server.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
});
