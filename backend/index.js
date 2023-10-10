require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const PORT = process.env.port;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", require("./Routes/CreateUser"));

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});
