const WebSocket = require('ws');
// const {Message} = require(DB MODEL)

const { WebSocketServer } = WebSocket;

const wss = new WebSocketServer({
  noServer: true,
  clientTracking: false,
});

wss.on('connection', (ws, req, wsClientMap) => {
  const { user } = req.session;
  // wsClientMap.set(user.id, { user, ws });

  // console.log(user);

  // message => {type: String, payload: Object}

  ws.on('message', (msg) => {
    const message = JSON.parse(msg);

    const { type, payload } = message;

    // console.log(message, usersMap.size);

    // const sender = wsClientMap.get(user.id);
    // const receiver = wsClientMap.get(+payload.chatWithUser);

    switch (type) {
      case 'message':

        Message.create({
          text: payload.text,
          userFrom: +payload.userFrom,
          userTo: +payload.userTo,
        })
          .then((newMessage) => {
            if (sender && receiver) {
              sender.ws.send(JSON.stringify({ type: 'message', payload: { newMessage, auth: user.id } }));
              receiver.ws.send(JSON.stringify({ type: 'message', payload: { newMessage } }));
            } else {
              sender.ws.send(JSON.stringify({ type: 'offline' }));
              sender.ws.send(JSON.stringify({ type: 'message', payload: { newMessage, auth: user.id } }));
            }
          })
          .catch(console.log);

        break;
      case 'open':
        /* if (sender && receiver) {
          sender.ws.send(JSON.stringify({ type: 'online' }));
          receiver.ws.send(JSON.stringify({ type: 'online' }));
        } */
        break;

      default:
        break;
    }
  });
  ws.on('close', (msg) => {
    const message = JSON.parse(msg);
    // wsClientMap.delete(user.id);
    // const receiver = wsClientMap.get(+message.chatWithUser);
    /*    if (receiver) {
      receiver.ws.send(JSON.stringify({ type: 'offline' }));
    } */
  });
});

module.exports = wss;
