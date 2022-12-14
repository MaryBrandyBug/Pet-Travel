const router = require('express').Router();
const WebSocket = require('ws');
const { SitterProfile, User, Message } = require('./db/models');
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

  ws.on('message', async (arg) => {
    const newMessage = JSON.parse(arg);
    console.log('BAAAAACK', newMessage);
    if (newMessage.receiverProfileId === undefined) {
      console.log('proverka');
      const { receiverId, senderId, message } = newMessage;
      try {
        await Message.create({
          UserId: senderId,
          receiverId,
          message,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      const { receiverProfileId, senderId, message } = newMessage;
      try {
        const receiverProfile = await SitterProfile.findOne({ where: { id: receiverProfileId } });
        const receiverId = receiverProfile.id;
        await Message.create({
          UserId: senderId,
          receiverId,
          message,
        });
        // console.log(receiverId);
      } catch (error) {
        console.log(error);
      }
    }
    // console.log('MESSAGE ws on', message);
    // console.log('MESSAGE ws on', newMessage.receiverProfileId);

    // const { receiverProfileId, senderId, message } = newMessage;

    // try {
    //   const receiverProfile = await SitterProfile.findOne({ where: { id: receiverProfileId } });
    //   const receiverId = receiverProfile.id;
    //   await Message.create({
    //     UserId: senderId,
    //     receiverId,
    //     message,
    //   });
    //   // console.log(receiverId);
    // } catch (error) {
    //   console.log(error);
    // }

    // });

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
