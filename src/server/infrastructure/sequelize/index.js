"use strict";
const tslib = require("tslib");
const Sequelize = require("sequelize");
function loadSchema(sequelize, schemas) {
    for (const schema of schemas) {
        schema.define(sequelize);
    }
    for (const schema of schemas) {
        schema.defer(sequelize);
    }
    return schemas;
}
function setupDB(config, schemas) {
    return tslib.__awaiter(this, void 0, void 0, function* () {
        const sequelize = yield createConnection(config);
        loadSchema(sequelize, schemas);
        yield sequelize.sync();
        return sequelize;
    });
}
exports.setupDB = setupDB;
function createConnection(conf) {
    return tslib.__awaiter(this, void 0, void 0, function* () {
        const options = {
            host: conf.host,
            port: conf.port || 3306,
            dialect: "mysql",
            logging: false,
        };
        return new Sequelize(conf.database, conf.user, conf.pass || null, options);
    });
}
exports.createConnection = createConnection;
