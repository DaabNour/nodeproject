const Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    multipleStatements: true,
  });

module.exports = sequelize;