const WebSocket = require('ws');
// const {Message} = require(DB MODEL)

const { WebSocketServer } = WebSocket;

const wss = new WebSocketServer({
  noServer: true,
  clientTracking: false,
});

wss.on('connection', (ws, req, wsClientMap) => {
  // const { auth } = req.session; // auth === user
  console.log('WS JS connection');
  // console.log('PRIVET ', ws);

  // wsClientMap.set(auth.id, { auth, ws });

  ws.on('message', (msg) => {
    const message = JSON.parse(msg);
    console.log('MESSAGE ws on', message);

    // const { type, payload } = message;

    // console.log(message, usersMap.size);

    // const sender = wsClientMap.get(auth.id);
    // const receiver = wsClientMap.get(+payload.chatWithUser);

    //     switch (type) {
    //       case 'message':

    //         message.create({
    //           text: payload.text,
    //           userFrom: +payload.userFrom,
    //           userTo: +payload.userTo,
    //         })
    //           .then((newMessage) => {
    //             if (sender /* && receiver */) {
    //               sender.ws.send(JSON.stringify({ type: 'message', payload: { newMessage, auth: auth.id } }));
    //               // receiver.ws.send(JSON.stringify({ type: 'message', payload: { newMessage } }));
    //             } else {
    //               sender.ws.send(JSON.stringify({ type: 'offline' }));
    //               sender.ws.send(JSON.stringify({ type: 'message', payload: { newMessage, auth: auth.id } }));
    //             }
    //           })
    //           .catch(console.log);

    //         break;
    //       case 'open':
    //         if (sender /* && receiver */) {
    //           sender.ws.send(JSON.stringify({ type: 'online' }));
    //           // receiver.ws.send(JSON.stringify({ type: 'online' }));
    //         } wsClientMap.delete(auth.id);
    //         // const receiver = wsClientMap.get(+message.chatWithUser);
    //         /* if (receiver) {
    // receiver.ws.send(JSON.stringify({ type: 'offline' }));
    // } */
    //         break;

    //       default:
    //         break;
    //     }
  });
  ws.on('close', (msg) => {
    const message = JSON.parse(msg);
    // wsClientMap.delete(auth.id);
    // const receiver = wsClientMap.get(+message.chatWithUser);
    /*  if (receiver) {
      receiver.ws.send(JSON.stringify({ type: 'offline' }));
    } */
  });
});

module.exports = wss;
