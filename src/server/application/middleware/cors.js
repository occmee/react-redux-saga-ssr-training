"use strict";
const tslib_1 = require("tslib");
function cors() {
    return (ctx, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield next();
        ctx.set("Access-Control-Allow-Origin", "*"); // FIXME: 適切に origin を設定すること
        ctx.set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, x-auth-token");
    });
}
exports.cors = cors;
