// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./app/config');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());

// Define routes
app.use(require('./app/routes/users'));
app.use(require('./app/routes/messages'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
