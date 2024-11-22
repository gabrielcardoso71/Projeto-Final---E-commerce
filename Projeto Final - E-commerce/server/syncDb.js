const sequelize = require("./database/config");
const User = require("./models/User");
const Product = require("./models/Product");
const Cart = require("./models/Cart");
const Order = require("./models/Order");
const OrderItem = require("./models/OrderItem");

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Banco de dados sincronizado.");
  })
  .catch((error) => {
    console.error("Erro ao sincronizar banco de dados:", error);
  });
