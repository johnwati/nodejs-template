const functions = require("firebase-functions");
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
// const route = require("./routes/routes");

const app = express();

app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes middleware
// app.use(route);

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});
// 404 handler
app.use((req, res) => {
  res.status(404).send("endpoint not found");
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

exports.App = functions.https.onRequest(app);


