const path = require("path");
const express = require("express"); // External Module
const userRouter = require("./routes/userRouter"); // Local Module
const { hostRouter } = require("./routes/hostRouter"); // Local Module
const rootDir = require("./utils/path_uitility"); // Local Module
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(rootDir, "public")));

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page not found" });
});

const PORT = 2200;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
