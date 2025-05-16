const fs = require("fs");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Home Page</title></head>");
    res.write("<body>");
    res.write("<h1>Enter your details</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" id="name" name="name" placeholder="Enter your name"><br><br>'
    );
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label>');
    res.write('<br><br><button type="submit">Submit</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() == "/submit-details" &&
    req.method == "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const params = new URLSearchParams(parsedBody);
      // const jsonObject = {};
      // for (const [key, value] of params.entries()) {
      //   jsonObject[key] = value;
      // }
      console.log(params);

      const jsonObject = Object.fromEntries(params);
      console.log(jsonObject);
      fs.writeFileSync("form.json", JSON.stringify(jsonObject));
    });
  }
};

module.exports = requestHandler; // exporting requestHandler function

// Different ways of exporting

// multiple exports using object

// module.exports = {
//   handler: requestHandler,
//   extra: "extra",
// };

// setting multiple properties

// module.exports.handler = requestHandler;
// module.exports.extra = "extra";

// shorthand

// exports.handler = requestHandler;
// exports.extra = "extra";
