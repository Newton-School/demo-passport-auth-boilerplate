const passport = require('passport')
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const User = require('./Models/User')
const conf = require('./environment')


// the following lines acts as a middleware to monitor and check requests between the client and the server

// passport.use(
//     write a `new JWTStrategy object here`,
// function (jwtPayload, done) {
//     here `done` is the callback to invoke upon successful jwt verification (or unsucessful is handled by `passport` itself)
//     return done(error=err, user=null, info={message: "some message"})
// }
// ))

module.exports = passport