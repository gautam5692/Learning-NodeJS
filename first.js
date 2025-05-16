const fs = require("fs");

fs.writeFile("output.txt", "writing file", (err) => {
  if (err) console.log("error occurred");
  else console.log("files written successfully");
});
