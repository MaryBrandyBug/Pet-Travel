require('dotenv').config();
const path = require('path');
const express = require('express');
const logger = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const http = require('http');
const wss = require('../ws');

// const WebSocket = require('ws');
/* const wss = new WebSocket.Server({ port: 3232 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
        console.log('data', data);
      }
    });
  });
}); */

const cors = require('./middlewares/cors');

const app = express();
const server = http.createServer(app);

const { SERV_PORT, SESSION_SECRET } = process.env;

// const isAuth = require('./middlewares/isAuth');
const authRouter = require('./routes/auth');
// const chatRouter = require('./routes/Chat');

const appReview = require('./routes/appReview');

const profileRouter = require('./routes/profile');
const profileSetRouter = require('./routes/profileSettings');

app.use(logger('dev'));
app.use(express.json());
app.use(cors);
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const sessionParser = session({
  name: 'Username',
  store: new FileStore(),
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 1000,
    httpOnly: true,
  },
});

app.use(sessionParser);

app.use('/', authRouter);
app.use('/profile', profileRouter);

app.use('/', appReview);
// app.use('/chat', chatRouter);

app.use('/profile', profileSetRouter);

app.locals.wsClients = new Map();

server.on('upgrade', (req, socket, head) => {
  wss.handleUpgrade(req, socket, head, (ws) => {
    console.log('emit');
    wss.emit('connection', ws, req);
  });
});

server.listen(SERV_PORT, () => {
  console.log(`Server started at PORT: ${SERV_PORT}`);
});
