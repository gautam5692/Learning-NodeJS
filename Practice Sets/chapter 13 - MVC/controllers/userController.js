exports.getHomes = (req, res, next) => {
  res.render("user/home", { pageTitle: "Airbnb Home Page" });
};
