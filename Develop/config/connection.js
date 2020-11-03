require('dotenv').config();

const Sequelize = require('sequelize');

// create connection to our db
const sequelize = new Sequelize('ecommerce_db', 'root', 'Ragingbull5', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});


module.exports = sequelize;
