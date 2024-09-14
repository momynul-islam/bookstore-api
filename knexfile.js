const path = require("path");

const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    client: process.env.DB_CLIENT || "mysql",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: path.join(__dirname, "db", "migrations"),
    },
    seeds: { directory: path.join(__dirname, "db", "seeds") },
  },
  production: {
    client: process.env.DB_CLIENT || "mysql",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: path.join(__dirname, "db", "migrations"),
    },
    seeds: { directory: path.join(__dirname, "db", "seeds") },
  },
};
