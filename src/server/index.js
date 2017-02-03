"use strict";
const cluster = require("cluster");
const os = require("os");
const logger = require("winston");
if (cluster.isMaster) {
    let cpuCount = parseInt(process.env.NUM_CPUS, 10);
    if (isNaN(cpuCount)) {
        cpuCount = os.cpus().length;
    }
    for (let i = 0; i < cpuCount; i++) {
        cluster.fork();
        logger.info(`child process created. cpu: ${i}`);
    }
    cluster.on('exit', (worker, code, signal) => {
        logger.info(`worker ${worker.process.pid} died (${code}). restarting...`);
    });
}
else {
    require("./app");
}
