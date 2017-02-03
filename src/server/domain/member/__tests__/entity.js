"use strict";
const tslib_1 = require("tslib");
require("jest");
const test_util_1 = require("../../../utility/test-util");
const config_1 = require("../../../application/config");
const sequelize_1 = require("../../../infrastructure/sequelize");
describe("domain", () => {
    const schemas = [
        require("../beta-entry-entity"),
    ];
    const appConfig = config_1.loadConfig();
    let db;
    let BetaEntry;
    beforeAll(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
        db = yield sequelize_1.setupDB(appConfig.infra.db, schemas);
        BetaEntry = db.model("BetaEntry");
        yield test_util_1.noCheckScope(db, () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield BetaEntry.truncate({ cascade: true });
        }));
    }));
    afterAll(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
        db.close();
    }));
    describe("BetaEntry", () => {
        it("::entry", () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield BetaEntry.entry({
                companyName: "株式会社テスト",
                applicantLastName: "テスト",
                applicantFirstName: "太郎",
                applicantDepartment: "開発部",
                email: "example@test.com",
                phoneNumber: "090-1234-5678",
                businessType: "dev",
                rangeOfNumbers: "small",
            });
            const entry = yield BetaEntry.findOne({ where: { companyName: "株式会社テスト" } });
            expect(entry).not.toBeNull();
        }));
    });
});
