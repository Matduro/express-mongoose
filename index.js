const express = require("express");
const app = express();
const path = require("path");
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

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  // console.log(products);
  // res.send("ALL PRODUCTS WILL BE HERE!");
  res.render("products/index", { products });
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  // Product.findOne({ _id: id }); same as below
  const product = await Product.findById(id);
  console.log(product);
  res.render("products/show", { product });
});

app.listen(3000, () => {
  console.log("APP IS LISTENING ON PORT 3000!");
});
