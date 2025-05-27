exports.getAddHome = (req, res, next) => {
  res.render("host/addHome", { pageTitle: "Add Home" });
};

exports.postHomeRegistered = (req, res, next) => {
  res.render("host/homeRegistered", {
    pageTitle: "Home  registered successfully",
  });
};
