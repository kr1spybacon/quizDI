const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// home page, send back user's topics
app.get('/', (req, res) => {
  // res.status(200).redirect('/auth/login');
  res.status(200).sendFile('../client/index.html');
});












/**
 * 404 handler
 */
 app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });