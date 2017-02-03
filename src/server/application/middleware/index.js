"use strict";
const x_response_time_1 = require("./x-response-time");
const cors = require("./cors");
function middleware(container) {
    const { config, sequelize } = container;
    const jwtConfig = config.auth.jwt;
    return (app) => {
        app.use(x_response_time_1.responseTime());
        app.use(cors.cors());
        return app;
    };
}
exports.middleware = middleware;
