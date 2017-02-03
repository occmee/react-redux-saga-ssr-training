"use strict";
const child_process_1 = require("child_process");
function _createWorker(args, options) {
    const proc = child_process_1.fork(args.module, args.args, args.options);
    if (options) {
        const events = ["close", "disconnect", "error", "exit", "message"];
        for (const name of events) {
            const event = options.event[name];
            if (event) {
                proc.on(name, event);
            }
        }
        if (options.io.stdout) {
            proc.stdout.pipe(options.io.stdout);
        }
        if (options.io.stderr) {
            proc.stderr.pipe(options.io.stderr);
        }
    }
    return proc;
}
function createWorker(args, options) {
    if (options) {
        const processCount = options.num;
        if (processCount > 1) {
            const procs = [];
            for (let i = 0; i < processCount; i++) {
                procs.push(_createWorker(args, options));
            }
            return procs;
        }
    }
    return _createWorker(args, options);
}
exports.createWorker = createWorker;
