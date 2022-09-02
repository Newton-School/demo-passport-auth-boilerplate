const jwt = require('jsonwebtoken');

const genToken = (user, secret) => {
    return jwt.sign({
        sub: user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, secret);
}
module.exports = genToken