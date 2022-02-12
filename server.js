const express = require('express');
const dotEnv = require('dotenv');
const path = require('path');
const mainRoutes = require('./routes/mainRoute');
const adminRoutes = require('./routes/adminRoute');
const DB = require('./config/db');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoStore = require('connect-mongo');
const flash = require('connect-flash');

const app = express();

//? dotEnv config
dotEnv.config({path: './config/config.env'});

//? connect to database
DB();

//? statics 
app.use(express.static(path.join(__dirname, 'public')));

//? view engine config
app.set('view engine', 'ejs');
app.set('views', 'views');

//? middleWares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(session({
    secret:'secret',
    resave: false,
    saveUninitialized: false,
    store: mongoStore.create({mongoUrl: process.env.MONGO_URI}),
    unset: 'destroy'
}));
app.use(flash());

//? passport configuration
require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());

//? routes
app.use(mainRoutes);
app.use(adminRoutes);
app.use((req, res) => {
    res.render('404');
})


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`app is running on port ${process.env.PORT}`)
});
