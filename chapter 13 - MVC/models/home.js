// core modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path_uitility");

module.exports = class Home {
  constructor(houseName, price, location, rating, homeImage) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.homeImage = homeImage;
  }

  save() {
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const homeDataPath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("file writing concluded: ", error);
      });
    });
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
