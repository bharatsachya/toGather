require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const user = require("../models/User");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

const saltRounds = 10;

const uri = process.env.mongoURL;

const client = new MongoClient(uri);

const dbName = "HackathonNGO";
const ngoDetails_collection = "ngoDetails";
const userDetails_collection = "userDetails";

const database = client.db(dbName);
const userDetailsCollection = database.collection(userDetails_collection);
const ngoDetailsCollection = database.collection(ngoDetails_collection);


async function insertUser(newUser) {
  await client.connect().then(() => {
    console.log("DB connected successfully");
  });

  try {
    const insertOneUser = await userDetailsCollection.insertOne(newUser);
    console.log("documents successfully inserted.");
  } catch (err) {
    console.log("Error while inserting" + err);
  }
}


async function insertNGO(newNGO) {
  await client.connect().then(() => {
    console.log("DB connected successfully");
  });

  try {
    const insertOneUser = await ngoDetailsCollection.insertOne(newNGO);
    console.log("documents successfully inserted.");
  } catch (err) {
    console.log("Error while inserting" + err);
  }
}


async function findUser(query) {
  await client.connect().then(() => {
    console.log("DB connected successfully");
  });

  try {
    const userFound = await userDetailsCollection.findOne(query);
    console.log(userFound);
    return userFound;
  } catch (err) {
    console.log("Something went wrong trying to find the documents:" + err);
  }
}


async function findNGO(query) {
  await client.connect().then(() => {
    console.log("DB connected successfully");
  });

  try {
    const userFound = await ngoDetailsCollection.findOne(query);
    console.log(userFound);
    return userFound;
  } catch (err) {
    console.log("Something went wrong trying to find the documents:" + err);
  }
}


async function generateAuthToken(newuser) {
  try {
    const token = await jwt.sign(
      {
        _id: newuser._id,
      },
      "hackathonWebsiteForNGOAndCharity"
    );
    return token;
  } catch (error) {
    console.log(error);
  }
}


router.route("/createuser").post(async (req, res) => {
  var encryptedPassword = await bcrypt.hash(req.body.password, saltRounds);
  const newUser = new user({
    name: req.body.name,
    password: encryptedPassword,
    email: req.body.email,
    location: req.body.location,
    isUser: true,
    isNGO: false,
  });

  const token = await generateAuthToken(newUser);

  const userSave = {
    name: req.body.name,
    password: encryptedPassword,
    email: req.body.email,
    location: req.body.location,
    tokens: { token: token },
    isUser: true,
    isNGO: false,
  };

  insertUser(userSave);
});


// the ngo that has to be saved in ngo db
router.route("/createngo").post(async (req, res) => {
  var encryptedPassword = await bcrypt.hash(req.body.password, saltRounds);
  const newNGO = new user({
    name: req.body.name,
    password: encryptedPassword,
    email: req.body.email,
    location: req.body.location,
    isUser: false,
    isNGO: true,
  });

  const token = await generateAuthToken(newNGO);

  const NGOSave = {
    name: req.body.name,
    password: encryptedPassword,
    email: req.body.email,
    location: req.body.location,
    tokens: { token: token },
    isUser: false,
    isNGO: true,
  };

  insertNGO(NGOSave);
});


router.post("/loginuser", async (req, res) => {
  const { email, password } = req.body;
  const findQuery = { email: email };
  const emailFind = await findUser(findQuery);

  if (emailFind) {
    var checkEncryptedPassword = await bcrypt.compare(
      password,
      emailFind.password
    );
    if (checkEncryptedPassword) {
      res.json({
        Success: "true",
        AuthToken: emailFind.tokens.token,
        user: emailFind,
      });
    } else {
      console.log("Match not found");
      res.json({ Success: "false" });
    }
  } else {
    console.log("Match not found");
    res.json({ Success: "false" });
  }
});


router.post("/loginngo", async (req, res) => {
  const { email, password } = req.body;
  const findQuery = { email: email };
  const emailFind = await findNGO(findQuery);

  if (emailFind) {
    var checkEncryptedPassword = await bcrypt.compare(
      password,
      emailFind.password
    );
    if (checkEncryptedPassword) {
      res.json({
        Success: "true",
        AuthToken: emailFind.tokens.token,
        ngo: emailFind,
      });
    } else {
      console.log("Match not found");
      res.json({ Success: "false" });
    }
  } else {
    console.log("Match not found");
    res.json({ Success: "false" });
  }
});
module.exports = router;
