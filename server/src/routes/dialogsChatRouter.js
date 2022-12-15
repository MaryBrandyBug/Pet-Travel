const router = require('express').Router();
const { Message, SitterProfile, ParentProfile } = require('../../db/models');

router.post('/get-all-messages', async (req, res) => {
  const { UserId, receiverId, userRole } = req.body; // receiverId ====>>>  eto receiverProfileID

  if (userRole === 'parent') {
    try {
      const receiverIdProfile = await SitterProfile.findOne({ where: { id: receiverId } });
      const trueReceiverId = receiverIdProfile.UserId;

      const messagesSent = await Message.findAll({
        where:
          { UserId, receiverId: trueReceiverId },
        raw: true,
      });
      const messagesReceived = await Message.findAll({
        where:
          { UserId: trueReceiverId, receiverId: UserId },
        raw: true,
      });
      // const AllMessages = [];
      // AllMessages.push(messagesReceived, messagesSent);
      const AllMessages = [...messagesSent, ...messagesReceived];
      res.json(AllMessages);
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const receiverIdProfile = await ParentProfile.findOne({ where: { id: receiverId } });
      const trueReceiverId = receiverIdProfile.UserId;

      const messagesSent = await Message.findAll({
        where:
          { UserId, receiverId: trueReceiverId },
        raw: true,
      });
      const messagesReceived = await Message.findAll({
        where:
          { UserId: trueReceiverId, receiverId: UserId },
        raw: true,
      });
      // const AllMessages = [];
      // AllMessages.push(messagesReceived, messagesSent);
      const AllMessages = [...messagesSent, ...messagesReceived];
      res.json(AllMessages);
    } catch (error) {
      console.log(error);
    }
  }
});

router.post('/get-all-messages/from-dialogs', async (req, res) => {
  const { UserId, receiverId /* userRole */ } = req.body;

  try {
    const messagesSent = await Message.findAll({
      where:
        { UserId, receiverId },

      raw: true,
    });
    const messagesReceived = await Message.findAll({
      where:
        { UserId: receiverId, receiverId: UserId },

      raw: true,
    });
    const AllMessages = [...messagesSent, ...messagesReceived];
    res.json(AllMessages);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
