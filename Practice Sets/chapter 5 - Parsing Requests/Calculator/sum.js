const sumRequestHandler = (req, res) => {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(parsedBody);
    const jsonObject = Object.fromEntries(params);
    const result = Number(jsonObject.num1) + Number(jsonObject.num2);
    console.log(result);
    res.write(`<h1>Your sum is ${result}</h1>`);
    return res.end();
  });
};

exports.sumRequestHandler = sumRequestHandler;
