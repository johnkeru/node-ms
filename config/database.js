const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mssql",
  host: "localhost",
  port: 1433,
  username: "sa",
  password: "YourStrong!Passw0rd",
  database: "master",
  dialectOptions: {
    options: {
      encrypt: false,
      trustServerCertificate: true,
    },
  },
  logging: false, // Set to true for SQL query logging
});

module.exports = { sequelize };
