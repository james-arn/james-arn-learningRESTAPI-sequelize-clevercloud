const { Sequelize } = require("sequelize"); // allows us to connect to database
require("dotenv").config(); //uses connection to effect database

const sequelize = new Sequelize(process.env.MYSQL_URI);

try {
  sequelize.authenticate();
  console.log("Successfully connected");
} catch (error) {
  console.log(error);
}

module.exports = sequelize;
