const path = require("path");
const express = require("express");
const app = express();
const contactRouter = require("./routes/contactRouter");
const homeRouter = require("./routes/homeRouter");
const rootDir = require("./utils/path_utility");

app.use(express.urlencoded());

app.use(homeRouter);
app.use(contactRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 2200;

app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
