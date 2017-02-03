"use strict";
const tslib_1 = require("tslib");
const client_1 = require("@slack/client");
class SlackNotificator {
    constructor(config) {
        this.client = new client_1.WebClient(config.token);
    }
    send(message, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const client = this.client;
            yield new Promise((resolve, reject) => {
                client.chat.postMessage(options.channel, message, (err, res) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(res);
                    }
                });
            });
        });
    }
}
exports.SlackNotificator = SlackNotificator;
