const WebSocket = require('ws');
const {
  SitterProfile,
  ParentProfile,
  Message,
} = require('./db/models');

const { WebSocketServer } = WebSocket;

const wss = new WebSocketServer({
  noServer: true,
  clientTracking: false,
});

wss.on('connection', (ws, req, wsClientMap) => {
  ws.on('message', async (arg) => {
    const newMessage = JSON.parse(arg);
    const {
      receiverProfileId, senderId, message, userRole,
    } = newMessage;
    if (userRole === 'parent') {
      if (newMessage.receiverProfileId === undefined) {
        const {
          receiverId, senderId, message, userRole,
        } = newMessage;
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
          const receiverId = receiverProfile.UserId;

          await Message.create({
            UserId: senderId,
            receiverId,
            message,
          });
        } catch (error) {
          console.log(error);
        }
      }
    } else if (newMessage.receiverProfileId === undefined) {
      const {
        receiverId, senderId, message, userRole,
      } = newMessage;
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
        const receiverProfile = await ParentProfile.findOne({ where: { id: receiverProfileId } });
        const receiverId = receiverProfile.UserId;

        await Message.create({
          UserId: senderId,
          receiverId,
          message,
        });
      } catch (error) {
        console.log(error);
      }
    }
  });
  ws.on('close', (msg) => {
    const message = JSON.parse(msg);
  });
});

module.exports = wss;
