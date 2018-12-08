const express = require('express');
const path = require('path');
const volleyball = require('volleyball');

const app = express();

app.use(express.json());

app.use(volleyball);

const publicFolder = path.join(__dirname, '..', 'public');

app.use(express.static(publicFolder));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
})

module.exports = app;