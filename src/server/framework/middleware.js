"use strict";
const logger = require("koa-logger");
const bodyparser = require("koa-bodyparser");
const helmet = require("koa-helmet");
function useMiddleware(app) {
    const middlewares = [
        logger(),
        bodyparser(),
        helmet(),
        helmet.noCache(),
    ];
    for (const mdl of middlewares) {
        app.use(mdl);
    }
    return app;
}
exports.useMiddleware = useMiddleware;
