const express = require('express');
const bodyParser = require("body-parser");
const firebaseRoute = require('./src/routes/FirebaseRoute');
const cors = require('cors');
require("dotenv").config();

const app = express(); // ✅ Initialize before using

const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Route setup
app.use("/api/firebase", firebaseRoute);

// Server start
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});