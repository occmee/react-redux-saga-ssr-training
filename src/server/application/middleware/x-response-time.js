"use strict";
const tslib_1 = require("tslib");
function responseTime() {
    return (ctx, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const start = Date.now();
        yield next();
        const delta = Math.ceil(Date.now() - start);
        ctx.set("X-Response-Time", `${delta}ms`);
    });
}
exports.responseTime = responseTime;
