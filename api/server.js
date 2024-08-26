// api/server.js

require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

const User = mongoose.model("User", userSchema);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.post("/", async function (req, res) {
  try {
    const newuser = new User({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    });

    await newuser.save();
    console.log("User saved successfully.");
    
    // After saving, redirect to the root to load index.html again
    res.redirect('/');
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).send("An error occurred.");
  }
});

const port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log(`Server started at Port ${port}`);
});
