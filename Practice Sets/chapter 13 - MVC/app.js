const express = require("express");
const app = express();
const path = require("path");
const rootDir = require("./utils/path_utility");
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const { pageNotFound } = require("./controllers/pageNotFound");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(rootDir, "public")));
app.use(express.urlencoded());

app.use(storeRouter);
app.use("/host", hostRouter);

app.use(pageNotFound);

const PORT = 2200;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
