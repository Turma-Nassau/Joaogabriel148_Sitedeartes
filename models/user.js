const Sequelize = require('sequelize');
const db = require('./db');
const sequelize = require('./db');

const User = db.define('users', {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
     },
     name: {
          type: SEQUELIZE.STRING,
          allowNull: false
     }
});

User.sync()

module.exports = User;  