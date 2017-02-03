"use strict";
require("reflect-metadata");
const inversify_1 = require("inversify");
function build(modules, args) {
    const container = new inversify_1.Container();
    for (const module of modules) {
        module.bind(container, args);
    }
    return container;
}
exports.build = build;
