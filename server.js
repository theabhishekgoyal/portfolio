// server.js

require('dotenv').config(); // Load environment variables from .env file
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

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
  res.sendFile(__dirname + "/index.html");
});

app.post("/", async function (req, res) {
  try {
    const newuser = new User({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    });

    const result = await newuser.save();
    console.log("User saved successfully:", result);
  } catch (err) {
    console.error("Error saving user:", err);
  }

  res.sendFile(__dirname + "/public/index.html");
});

const port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log(`Server started at Port ${port}`);
});

