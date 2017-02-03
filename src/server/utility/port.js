"use strict";
const tslib_1 = require("tslib");
const net_1 = require("net");
const MIN_FREE_PORT = 49152;
const MAX_FREE_PORT = 65535;
function checkFreePort(port) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const socket = new net_1.Socket();
        return yield new Promise((resolve) => {
            let free;
            const close = (isFree) => {
                socket.destroy();
                free = isFree;
            };
            socket.on("connect", () => close(true));
            socket.on("timeout", () => close(false));
            socket.on("error", () => close(false));
            socket.on("close", () => resolve(free));
            socket.connect(port);
        });
    });
}
function getFreePort() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        for (let p = MIN_FREE_PORT; p <= MAX_FREE_PORT; p++) {
            const isFree = yield checkFreePort(p);
            if (isFree) {
                return p;
            }
        }
        throw new Error("all ports is used.");
    });
}
exports.getFreePort = getFreePort;
