const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const es6Renderer = require('express-es6-template-engine')
const session = require('express-session')
const bcrypt = require('bcrypt')
const checkAuth = require('./middleware/checkAuth')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const models = require('./models')
const store = new SequelizeStore({ db: models.sequelize })
const indexRouter = require('./routes/index')
const path = require('path')
const app = express()
const userLogin = require('./routes/user-login')
const menuRouter = require('./routes/menu')
app.engine('html', es6Renderer)
app.set('views', 'templates')
app.set('view engine', 'html')


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
    session({
        secret: 'secret', // used to sign the cookie
        resave: false, // update session even w/ no changes
        saveUninitialized: true, // always create a session
        cookie: {
            secure: false, // true: only accept https req's
            maxAge: 2_592_000_000, // time in milliseconds
            // 2,592,000,000 ms = 30 days
        },
        store: store
    })
);
store.sync()
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter)
app.use('/menu', menuRouter)
app.use('/login', userLogin)

module.exports = app;