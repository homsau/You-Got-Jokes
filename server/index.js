// server/index.js
// import serverless from 'serverless-http';
const path = require('path');
const express = require('express');
const LimitingMiddleware = require('limiting-middleware');
const { randomJoke } = require('./handler');

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "You Got Jokes!" });
});

// limit access to api. 100 requests every 10 minutes
// app.use(new LimitingMiddleware({ limit: 100, resetInterval: 600000}).limitByIp());

app.get('/jokes/random', (req, res) => {
  res.json(randomJoke());
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});