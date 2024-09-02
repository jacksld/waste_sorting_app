const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./api/routes/route');

// Initialize the Express app
const app = express();

// Set the port
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(cors()); // Enable CORS for all routes

// Connect to MongoDB
mongoose.connect('mongodb://mongo_db:27017/waste_sorting', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Use the routes
routes(app);

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
