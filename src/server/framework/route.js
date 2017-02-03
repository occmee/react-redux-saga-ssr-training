"use strict";
const Router = require("koa-router");
const graphql_server_koa_1 = require("graphql-server-koa");
function useGraphQL(app, schema, context) {
    const router = new Router();
    router.post("/graphql", graphql_server_koa_1.graphqlKoa({
        schema,
        rootValue: context,
    }));
    const env = process.env.NODE_ENV || "development";
    if (env === "development") {
        router.get("/graphiql", graphql_server_koa_1.graphiqlKoa({
            endpointURL: "/graphql",
        }));
    }
    return app.use(router.routes()).use(router.allowedMethods());
}
exports.useGraphQL = useGraphQL;
