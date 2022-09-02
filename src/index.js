const app = require('./app');
const mongoose = require('mongoose');
const genToken = require('./utils')
const User = require('./Models/User')
const passport = require('./passport')
const conf = require('./environment')
//connect to DB
mongoose.connect(conf.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})



app.post('/register', async function (req, res, next) {
    const { email, password } = req.body;

    //Check If User Exists
    let user = await User.findOne({ email, password })

    if (!user) {
        user = new User({ email, password })
    }
    await user.save()
    // Generate JWT token
    // generate jwt-token here using `genToken` function
    // return res.status(200).send({token})
});


app.get('/secret', (req, res, next) => {
    // if authenticated successfully AND user exists and db
    // return res.status(200).json("success") // you can return any message only status matters
    // otherwise
    // return res.status(401);
    // res.end(info.message); // not necessary
    // return;
})

app.listen(8080, () => console.log('Server running......'));

module.exports = app;