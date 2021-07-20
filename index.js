const express = require("express");
const cors = require("cors");

const starters = require("./data/starters.json");
const salads = require("./data/salads.json");
const dishes = require("./data/dishes.json");
const drinks = require("./data/drinks.json");
const desserts = require("./data/desserts.json");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/starters", (req, res) => {
  res.send(starters);
});

app.get("/salads", (req, res) => {
  res.send(salads);
});

app.get("/dishes", (req, res) => {
  res.send(dishes);
});

app.get("/drinks", (req, res) => {
  res.send(drinks);
});

app.get("/desserts", (req, res) => {
  res.send(desserts);
});

app.listen(PORT, () => {
  console.log(`Server is running on port - ${PORT}!`);
});
