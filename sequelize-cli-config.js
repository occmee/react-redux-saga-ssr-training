require("dotenv").config();

module.exports = {
  "development": {
    "username": process.env.RRSST_DB_USER,
    "password": process.env.RRSST_DB_PASS,
    "database": process.env.RRSST_DB_NAME,
    "host": process.env.RRSST_DB_HOST,
    "port": process.env.RRSST_DB_PORT,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.RRSST_DB_USER,
    "password": process.env.RRSST_DB_PASS,
    "database": process.env.RRSST_DB_NAME_TEST,
    "host": process.env.RRSST_DB_HOST,
    "port": process.env.RRSST_DB_PORT,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.RRSST_DB_USER,
    "password": process.env.RRSST_DB_PASS,
    "database": process.env.RRSST_DB_NAME,
    "host": process.env.RRSST_DB_HOST,
    "port": process.env.RRSST_DB_PORT,
    "dialect": "mysql"
  }
};
