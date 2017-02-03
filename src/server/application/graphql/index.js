"use strict";
const tslib_1 = require("tslib");
const graphql_1 = require("graphql");
const language_1 = require("graphql/language");
const graphql_tools_1 = require("graphql-tools");
const beta_entry_1 = require("./beta-entry");
function makeSchema(typeDefs) {
    const Query = {};
    const Mutation = {};
    Object.assign(Query, beta_entry_1.defineQuery());
    Object.assign(Mutation, beta_entry_1.defineMutation());
    const resolvers = tslib_1.__assign({}, defineType(), { Query,
        Mutation });
    return graphql_tools_1.makeExecutableSchema({
        typeDefs,
        resolvers,
    });
}
exports.makeSchema = makeSchema;
function defineType() {
    return {
        Date: new graphql_1.GraphQLScalarType({
            name: "Date",
            description: "Date custom scalar type",
            parseValue(value) {
                return new Date(value);
            },
            serialize(value) {
                return value.getTime();
            },
            parseLiteral(ast) {
                if (ast.kind === language_1.Kind.INT) {
                    return parseInt(ast.value, 10);
                }
                return null;
            },
        }),
    };
}
