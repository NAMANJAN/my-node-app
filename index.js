const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(morgan("dev")); // Log requests

// Routes
app.get("/", (req, res) => {
  res.send("Hello, Node.js with easy libraries is working!");
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
