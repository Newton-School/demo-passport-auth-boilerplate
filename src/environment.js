const dotenv = require('dotenv')
dotenv.config({ path: __dirname + '/../.env' })

// console.log(__dirname + '/../.env')
module.exports = {
    TOKEN_SECRET: process.env.TOKEN_SECRET,
    DATABASE_URL: process.env.DATABASE_URL
}