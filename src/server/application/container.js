"use strict";
class ContainerBuilder {
    constructor() {
        this.container = {
            logger: console,
            config: {},
            sequelize: null,
            notificator: null,
        };
    }
    useLogger(logger) {
        this.container.logger = logger;
        return this;
    }
    useConfig(config) {
        this.container.config = config;
        return this;
    }
    useSequelize(sequelize) {
        this.container.sequelize = sequelize;
        return this;
    }
    useNotificator(notificator) {
        this.container.notificator = notificator;
        return this;
    }
    build() {
        return this.container;
    }
}
exports.ContainerBuilder = ContainerBuilder;
