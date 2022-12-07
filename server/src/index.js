require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('./middlewares/cors');

const app = express();

const { SERV_PORT, SESSION_SECRET } = process.env;

const isAuth = require('./middlewares/isAuth');
const authRouter = require('./routes/auth');

app.use(logger('dev'));
app.use(express.json());
app.use(cors);
app.use(express.urlencoded({ extended: false }));

const sessionConfig = {
  name: 'Username',
  store: new FileStore(),
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 1000,
    httpOnly: true,
  },
};
app.use(session(sessionConfig));

app.use('/', authRouter);

app.listen(SERV_PORT, () => {
  console.log(`Server started at PORT: ${SERV_PORT}`);
});
