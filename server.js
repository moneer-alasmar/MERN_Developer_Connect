const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Database Configuration
const db = require("./config/keys").mongoURI;
// Connect to DB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port: ${port}`));
