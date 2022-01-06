const express = require("express");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
// APP
const app = express();

// connect to mongoDB Database
connectDB();

// Fix Cors error
app.use(cors({ origin: "http://localhost:3000" }));

// init middleware
app.use(express.json({ extended: false }));

// routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

// listen
app.listen(PORT, () =>
  console.log("server has begin started ! on port " + PORT)
);
