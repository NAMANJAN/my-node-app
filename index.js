<<<<<<< HEAD
const express = require("express");
const awsServerlessExpress = require("aws-serverless-express");
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
  res.send("Hello, Node.js with AWS Lambda!");
});

// Export Lambda Handler
const server = awsServerlessExpress.createServer(app);
exports.handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context);
};

=======
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample API Route
app.get('/', (req, res) => {
    res.json({ message: 'Hello, Node.js API is running!' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
>>>>>>> 9d55bcb (Fix package-lock.json issue)
