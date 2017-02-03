"use strict";
const compose = require("koa-compose");
const passport = require("koa-passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
function auth(conf, sequelize) {
    const opts = Object.assign({}, conf, {
        jwtFromRequest: ExtractJwt.fromAuthHeader(),
    });
    passport.use(new JwtStrategy(opts, (peyload, done) => {
        const User = sequelize.model("User");
        User
            .findOne({ where: { username: peyload.username } })
            .then((user) => done(null, user || false))
            .catch((err) => done(err, false));
    }));
    return compose([
        passport.initialize(),
        passport.session(),
        passport.authenticate("jwt", { session: false }),
    ]);
}
exports.auth = auth;
