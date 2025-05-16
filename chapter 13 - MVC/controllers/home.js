const registeredHomes = [];

exports.getAddHome = (req, res, next) => {
  res.render("add_home", { pageTitle: "Add Home to Airbnb" });
};

exports.postAddHome = (req, res, next) => {
  registeredHomes.push({
    houseName: req.body.houseName,
    price: req.body.price,
    location: req.body.location,
    rating: req.body.rating,
    homeImage: req.body.homeImage,
  });
  res.render("home_added", { pageTitle: "Home added successfully" });
};

exports.getHome = (req, res, next) => {
  if (registeredHomes.length != 0) {
    console.log(registeredHomes, registeredHomes.length);
  }
  res.render("home", {
    registeredHomes: registeredHomes,
    pageTitle: "Airbnb Home",
  });
};
