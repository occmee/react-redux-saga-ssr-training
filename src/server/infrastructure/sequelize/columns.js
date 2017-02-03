"use strict";
const tslib_1 = require("tslib");
const sequelize = require("sequelize");
function appendCommonColumns(schema) {
    Object.assign(schema, {
        createdAt: {
            field: "created_at",
            type: sequelize.DATE,
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            comment: "作成日時",
        },
        updatedAt: {
            field: "updated_at",
            type: sequelize.DATE,
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
            comment: "更新日時",
        },
    });
}
exports.appendCommonColumns = appendCommonColumns;
function surrogateKey(options) {
    return tslib_1.__assign({}, options, { type: sequelize.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true });
}
exports.surrogateKey = surrogateKey;
function reference(info) {
    const { table, key, comment } = info;
    const field = info.field || key;
    const primaryKey = info.primaryKey || false;
    const allowNull = info.allowNull || false;
    const columnInfo = {
        field,
        type: sequelize.INTEGER.UNSIGNED,
        primaryKey,
        allowNull,
        references: {
            model: table,
            key,
        },
        comment,
    };
    return columnInfo;
}
exports.reference = reference;
