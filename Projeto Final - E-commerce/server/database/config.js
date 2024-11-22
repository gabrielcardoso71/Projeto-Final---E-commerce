const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database/sniker.sqlite",
  logging: false,
});

module.exports = sequelize;