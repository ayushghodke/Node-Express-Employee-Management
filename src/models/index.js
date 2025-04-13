const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../config/db.config");

//Cnnnection configuration
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.employees = require("./employee.model")(sequelize, DataTypes);

// Sync DB
db.sequelize.sync({ force: false }).then(() => {
  console.log("Database synced");
});

module.exports = db;
