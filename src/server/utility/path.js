"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
const path_1 = require("path");
__export(require("path"));
exports.rootDir = path_1.resolve(__dirname, "../../..");
exports.resourceDir = path_1.resolve(exports.rootDir, "resource/server");
exports.generateTemplateDir = path_1.resolve(exports.resourceDir, "generate-templates");
exports.mailTemplateDir = path_1.resolve(exports.resourceDir, "mail-templates");
exports.migrationDir = path_1.resolve(exports.rootDir, "src/server/script/migration");
exports.domainDir = path_1.resolve(exports.rootDir, "src/server/domain");
exports.infraDir = path_1.resolve(exports.rootDir, "src/server/infrastructure");
