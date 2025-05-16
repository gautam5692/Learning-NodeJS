const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url); // (/) is the url if there is no path after localhost
  console.log(req.method); // (GET) is method in this case
  console.log(req.headers); // (hose, connections, accept) are headers enclosed by {}
});

const port = 2200;

server.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
});
