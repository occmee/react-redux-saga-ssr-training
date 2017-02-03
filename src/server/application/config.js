"use strict";
require("reflect-metadata");
const env = process.env.NODE_ENV;
if (!env || env === "development" || env === "test") {
  require("dotenv").config();
}
function loadConfig() {
  return {
    api: {
      port: process.env.RRSST_API_PORT
    },
    sequelize: {
      host: process.env.RRSST_DB_HOST,
      port: process.env.RRSST_DB_PORT,
      database: process.env.RRSST_DB_NAME,
      user: process.env.RRSST_DB_USER,
      pass: process.env.RRSST_DB_PASS || null,
    },
    notificator: {
      slack: {
        token: process.env.RRSST_SLACK_TOKEN,
      },
    },
    auth: {
      jwt: {
        secretOrKey: process.env.RRSST_JWT_SECRET,
        issuer: "",
        audience: "",
      },
    },
    account: {
      passwordSalt: process.env.RRSST_ACCOUNT_PASS_SALT,
    },
  };
}
exports.loadConfig = loadConfig;
