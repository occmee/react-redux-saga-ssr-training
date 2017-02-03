"use strict";
function defineQuery() {
    return {
        hello(container, args, ctx, info) {
            return "hello";
        },
        fetchBetaEntry(container, args, ctx, info) {
            const id = args.id;
            const { sequelize } = container;
            const BetaEntry = sequelize.model("BetaEntry");
            return BetaEntry.find({ where: { id } });
        },
    };
}
exports.defineQuery = defineQuery;
function defineMutation() {
    return {
        postBetaEntry(container, args, ctx, info) {
            const { input: betaEntryInput } = args;
            const { sequelize } = container;
            const BetaEntry = sequelize.model("BetaEntry");
            return BetaEntry.entry(betaEntryInput);
        },
    };
}
exports.defineMutation = defineMutation;
