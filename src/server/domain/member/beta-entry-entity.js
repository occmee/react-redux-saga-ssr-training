"use strict";
const Sequelize = require("sequelize");
const columns_1 = require("../../infrastructure/sequelize/columns");
const BetaEntryAttributes = {
    id: columns_1.surrogateKey({ comment: "連番", field: "id" }),
    companyName: {
        type: Sequelize.STRING,
        field: "company_name",
        allowNull: false,
        comment: "会社名",
    },
    applicantLastName: {
        type: Sequelize.STRING,
        field: "applicant_last_name",
        allowNull: false,
        comment: "申込者姓",
    },
    applicantFirstName: {
        type: Sequelize.STRING,
        field: "applicant_first_name",
        allowNull: false,
        comment: "申込者名",
    },
    applicantDepartment: {
        type: Sequelize.STRING,
        field: "applicant_department",
        allowNull: false,
        comment: "申込者の所属部署",
    },
    email: {
        type: Sequelize.STRING,
        field: "email",
        allowNull: false,
        comment: "メールアドレス",
    },
    phoneNumber: {
        type: Sequelize.STRING,
        field: "phone_number",
        allowNull: false,
        comment: "電話番号",
    },
    businessType: {
        type: Sequelize.STRING,
        field: "business_type",
        allowNull: false,
        comment: "業種",
    },
    rangeOfNumbers: {
        type: Sequelize.STRING,
        field: "range_of_numbers",
        allowNull: false,
        comment: "従業員数",
    },
    status: {
        type: Sequelize.STRING,
        field: "status",
        allowNull: false,
        defaultValue: "requested",
        comment: "登録ステータス",
    },
};
const ModelOptions = {
    tableName: "beta_entries",
    createdAt: "created_at",
    updatedAt: "updated_at",
    scopes: {},
    instanceMethods: {},
    classMethods: {
        entry(betaEntry) {
            return this.create(betaEntry);
        },
    },
};
function define(sequelize) {
    const model = sequelize.define("BetaEntry", BetaEntryAttributes, ModelOptions);
    return model;
}
exports.define = define;
function defer(sequelize) {
}
exports.defer = defer;
