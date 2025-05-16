const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  console.log("Exiting server in 3 secods...");
  setTimeout(() => {
    console.log("Process exited");
    process.exit(); // stops event loop // server exit
  }, 3000);
});

const port = 2200;

server.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
});
