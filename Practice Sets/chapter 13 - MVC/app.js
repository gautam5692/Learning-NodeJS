const express = require("express");
const app = express();
const path = require("path");
const rootDir = require("./utils/path_utility");
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(rootDir, "public")));

app.use(userRouter);
app.use("/host", hostRouter);

const PORT = 2200;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
