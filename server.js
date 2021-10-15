const functions = require("firebase-functions");
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
// const route = require("./routes/routes");
const route = require("./app/routes/note.routes.js");


const app = express();

app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//=============================setting database connection====================
// Configuring the database
const dbConfig = require('./app/config/mongodb.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
//=============================end of database connection=================
// routes middleware
// app.use(route);
require('./app/routes/note.routes.js')(app);

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


