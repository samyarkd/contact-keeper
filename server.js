const express = require("express");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const { path } = require("express/lib/application");
// APP
const app = express();

// connect to mongoDB Database
connectDB();

// Fix Cors error
app.use(cors({ origin: "http://localhost:3000/" }));

// init middleware
app.use(express.json({ extended: false }));

// routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

// Save static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// listen
app.listen(PORT, () =>
  console.log("server has begin started ! on port " + PORT)
);
