const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path_utility");

module.exports = class Home {
  constructor(houseName, price, location, rating, homeImage) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.homeImage = homeImage;
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, "data", "homeData.json");
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

  save() {
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const homeDataPath = path.join(rootDir, "data", "homeData.json");
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("file writing concluded: ", error);
      });
    });
  }
};
