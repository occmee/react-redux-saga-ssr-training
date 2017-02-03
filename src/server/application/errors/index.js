"use strict";
function route(ctx, err) {
    const handlers = [];
    let found = false;
    for (const handler of handlers) {
        if (handler(ctx, err)) {
            found = true;
            break;
        }
    }
    if (!found) {
        ctx.status = 500;
    }
}
exports.route = route;
