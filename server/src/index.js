require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const http = require('http');
// const wss = require('./ws');

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

const { SERV_PORT, SESSION_SECRET } = process.env;

const isAuth = require('./middlewares/isAuth');
const authRouter = require('./routes/auth');

app.use(logger('dev'));
app.use(express.json());
app.use(cors);
app.use(express.urlencoded({ extended: false }));

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

app.locals.wsClients = new Map();

const server = http.createServer(app);

// server.on('upgrade', (req, socket, head) => {
//   console.log('Upgrade to WS');
//   sessionParser(req, {}, () => {
//     /*  if (!req.session.user) {
//       console.log('error');
//       socket.write('Error: No session');
//       socket.end();
//     } */

//     wss.handleUpgrade(req, socket, head, (ws) => {
//       console.log('emit');
//       wss.emit('connection', ws, req);
//     });
//   });
// });

server.listen(SERV_PORT, () => {
  console.log(`Server started at PORT: ${SERV_PORT}`);
});
