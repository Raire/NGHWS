const express = require('express');
const path = require('path');
const volleyball = require('volleyball');

const app = express();

app.use(express.json());

app.use(volleyball);

const publicFolder = path.join(__dirname, '..', 'public');

app.use(express.static(publicFolder));

module.exports = app;