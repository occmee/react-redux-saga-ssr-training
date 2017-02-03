"use strict";
const tslib_1 = require("tslib");
const http = require("http");
const supertest_1 = require("supertest");
const Koa = require("koa");
const logger = require("koa-logger");
const bodyparser = require("koa-bodyparser");
const Router = require("koa-router");
function createTestAgent(options) {
    const app = new Koa();
    if (options.useLog) {
        app.use(logger());
    }
    app.use(bodyparser());
    for (const mdl of options.middlewares) {
        app.use(mdl);
    }
    const router = options.route(new Router());
    app.use(router.routes()).use(router.allowedMethods());
    return supertest_1.agent(http.createServer(app.callback()));
}
exports.createTestAgent = createTestAgent;
function noCheckScope(db, fn) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield db.query("SET FOREIGN_KEY_CHECKS = 0");
        yield fn().then(() => db.query("SET FOREIGN_KEY_CHECKS = 1"), () => db.query("SET FOREIGN_KEY_CHECKS = 1"));
    });
}
exports.noCheckScope = noCheckScope;
