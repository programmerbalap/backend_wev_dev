const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const session = require('express-session');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const rolesRouter = require('./routes/roles');
const booksRouter = require('./routes/books');
const authRouter = require('./routes/auth');

const app = express();

const db = require('./database/models');
const { strict } = require('assert');
// console.log(db);

try {
  db.sequelize.authenticate();
  console.log('Connect successfully...');
} catch (err) {
  console.error(err, 'Unable to connect database XXX');
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: 'reandomsecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 600000, //6 menit
    },
  })
);

app.use(indexRouter);
app.use(usersRouter);
app.use(rolesRouter);
app.use(booksRouter);
app.use(authRouter);

module.exports = app;
