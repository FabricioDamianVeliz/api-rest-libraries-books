const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

const initializeDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.query("SELECT 2+2  as result;");
    console.log("Database connection established");
    await sequelize.sync({ force: false });
  } catch (error) {
    console.error("There was an error initializing the database", error);
  }
};

module.exports = { sequelize, initializeDB };