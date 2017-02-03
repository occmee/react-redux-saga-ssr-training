"use strict";
const http = require("http");
const https = require("https");
const Koa = require("koa");
const middleware_1 = require("./middleware");
const route_1 = require("./route");
function createServer(serverType, args) {
    const app = new Koa();
    middleware_1.useMiddleware(app);
    if (args.pipeline) {
        args.pipeline(app, args.context);
    }
    if (args.graphql) {
        route_1.useGraphQL(app, args.graphql.schema, args.context);
    }
    switch (serverType) {
        case "http": {
            return http.createServer(app.callback());
        }
        case "https": {
            if (args.https) {
                return https.createServer(args, app.callback());
            }
            throw new Error("options is required.");
        }
        default: {
            throw new Error("server type is unknown.");
        }
    }
}
exports.createServer = createServer;
