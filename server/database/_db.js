const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost/NGH');

module.exports = db;
