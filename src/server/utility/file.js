"use strict";
const fs_1 = require("fs");
const path_1 = require("path");
function searchFilesRecursive(dir, search) {
    let result = [];
    const dirs = fs_1.readdirSync(dir).map((name) => path_1.resolve(dir, name));
    const files = [];
    for (const dirPath of dirs) {
        if (fs_1.statSync(dirPath).isDirectory()) {
            result = [...result, ...searchFilesRecursive(dirPath, search)];
        }
        else {
            files.push(dirPath);
        }
    }
    return [...files.filter((file) => search.test(file)), ...result];
}
exports.searchFilesRecursive = searchFilesRecursive;
