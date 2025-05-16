const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  res.write("<html>");
  res.write("<head><title>Myntra Links</title></head>");
  res.write("<body>");
  if (req.url == "/") {
    res.write('<a href="home">Home</a>');
    res.write('<a href="men">Men</a>');
    res.write('<a href="women">Women</a>');
    res.write('<a href="kids">Kids</a>');
    res.write('<a href="cart">Cart</a>');
  } else if (req.url.toLowerCase() == "/home") {
    res.write("<h1>Welcome to Home Page of Myntra");
  } else if (req.url.toLowerCase() == "/men") {
    res.write("<h1>Welcome to Men collection Page of Myntra");
  } else if (req.url.toLowerCase() == "/women") {
    res.write("<h1>Welcome to Women collection Page of Myntra");
  } else if (req.url.toLowerCase() == "/kids") {
    res.write("<h1>Welcome to Kids collection Page of Myntra");
  } else if (req.url.toLowerCase() == "/cart") {
    res.write("<h1>Welcome to your Myntra cart");
  } else {
    res.write("<h1>404, Sorry we could not find your desired page</h1>");
  }
  res.write("</body>");
  res.write("</html>");
  return res.end();
});

server.listen(2200, () => {
  console.log("Server running on address http://localhost:2200");
});
