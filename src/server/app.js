"use strict";
const tslib = require("tslib");
const path = require("path");
const logger = require("winston");
const sequelize = require("./infrastructure/sequelize");
const server = require("./framework/server");
const common = require("../../src/common");
const container = require("./application/container");
const middleware = require("./application/middleware");
const config = require("./application/config");
const graphql = require("./application/graphql");
const file = require("./utility/file");

const appConfig = config.loadConfig();

(() => tslib.__awaiter(this, void 0, void 0, function* () {
    const schemas = (file.searchFilesRecursive(path.resolve(__dirname, "domain"), /\-entity\.js$/)
        .map(require));
    return (new container.ContainerBuilder()
        .useConfig(appConfig)
        .useSequelize(yield sequelize.setupDB(appConfig.sequelize, schemas))
        .useLogger(logger)
        .build());
}))().then((container) => {
    const serverArgs = {
        context: container,
        pipeline: middleware.middleware(container),
        graphql: {
            schema: graphql.makeSchema(common.GraphQLTypeDef),
        },
    };
    server.createServer("http", serverArgs).listen(appConfig.api.port);
    logger.info(`server is listening on port ${appConfig.api.port} ...`);
});
