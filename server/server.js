const express = require("express");
const cors = require("cors");
const config = require("./config/server");
const router = require("./routes/router");

const server = express();

server.use(cors());
server.use(express.json());

server.use("/api", router);

// TODO
// SETUP ACTIVITY: Put the code to connect to MongoDB below!
const mongoose = require('mongoose');
mongoose
  .connect(config.DB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB: ', err));

// END SETUP ACTIVITY
server.listen(config.PORT, () => {
  console.log("Server started listening on PORT " + config.PORT);
});
