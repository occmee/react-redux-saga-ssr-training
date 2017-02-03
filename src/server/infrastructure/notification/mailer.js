"use strict";
const tslib_1 = require("tslib");
const nodemailer_1 = require("nodemailer");
const email_templates_1 = require("email-templates");
const path_1 = require("../../utility/path");
class MailNotificator {
    constructor(options) {
        this.transporter = nodemailer_1.createTransport(options);
    }
    createTemplate(templateName, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const tplPath = path_1.resolve(path_1.mailTemplateDir, templateName);
            const template = new email_templates_1.EmailTemplate(tplPath);
            const tpl = yield new Promise((done) => template.render(params, done));
        });
    }
    send(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const tplPath = path_1.resolve(path_1.mailTemplateDir, params.template);
            const template = new email_templates_1.EmailTemplate(tplPath);
            yield this.transporter.templateSender(params);
        });
    }
}
exports.MailNotificator = MailNotificator;
function useGmail(auth) {
    return {
        service: "gmail",
        auth,
    };
}
exports.useGmail = useGmail;
