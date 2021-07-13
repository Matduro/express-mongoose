// This file is isolated from the index file (ie running on it's own for the purpose of feeding new data)
const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/farmStand", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!");
  })
  .catch((error) => {
    console.log("OH NO THE MONGO CONNECTION DID NOT WORK!!");
    console.log(error);
  });

const p = new Product({
  name: "Ruby Grapefruit",
  price: 1.99,
});
