"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
const mailer_1 = require("./mailer");
const slack_1 = require("./slack");
__export(require("./mailer"));
__export(require("./slack"));
class NofiticatorContainer {
}
exports.NofiticatorContainer = NofiticatorContainer;
class NotificatorBuilder {
    constructor() {
        this.container = new NofiticatorContainer();
    }
    useMailer() {
        this.container.mailer = new mailer_1.MailNotificator({});
        return this;
    }
    useSlack(config) {
        this.container.slack = new slack_1.SlackNotificator(config);
        return this;
    }
    build() {
        return this.container;
    }
}
exports.NotificatorBuilder = NotificatorBuilder;
