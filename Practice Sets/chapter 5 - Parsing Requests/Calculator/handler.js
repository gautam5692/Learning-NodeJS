const fs = require("fs");
const { sumRequestHandler } = require("./sum");

const handler = (req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Home Page</title></head>");
  res.write("<body>");

  if (req.url == "/") {
    res.write("<h1>Welcome to Calculator Page</h1>");
    res.write('<a href="calculator">Calculator</a>');
  } else if (req.url.toLowerCase() == "/calculator") {
    res.write('<form action="calculate-result" method="POST">');
    res.write('<input type="number" id="num1" name="num1">');
    res.write("+");
    res.write('<input type="number" id="num2" name="num2">');
    res.write('<br><br><button type="submit">SUM</button>');
    res.write("</form>");
  } else if (
    req.url.toLowerCase() == "/calculate-result" &&
    req.method == "POST"
  ) {
    return sumRequestHandler(req, res);
  } else {
    res.write("<h1>404, Page does not exist</h1>");
    res.write('<a href="/">Go to home</a>');
  }
  res.write("</body>");
  res.write("</html>");
  return res.end();
};

module.exports = handler;
