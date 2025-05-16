const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);

  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Home Page</title></head>");
    res.write("<body><h1>Welcome to Home Page</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url == "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Products Page</title></head>");
    res.write("<body><h1>No products available</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url == "/learningNodeJS") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Learning NodeJS</title></head>");
    res.write("<body><h1>Yes, I am learning NodeJS</h1></body>");
    res.write("</html>");
    return res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Learning NodeJS</title></head>");
    res.write("<body><h1>Welcome to the NodeJS learning page</h1></body>");
    res.write("</html>");
    return res.end();
  }
});

const port = 2200;

server.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
});
