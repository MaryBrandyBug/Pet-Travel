const router = require('express').Router();
const { Message, SitterProfile, ParentProfile } = require('../../db/models');

router.post('/get-all-messages', async (req, res) => {
  const { UserId, receiverId, userRole } = req.body; // receiverId ====>>>  eto receiverProfileID
  console.log(req.body);
  if (userRole === 'parent') {
    console.log('ya PARENT');
    try {
      const receiverIdProfile = await SitterProfile.findOne({ where: { id: receiverId } });
      const trueReceiverId = receiverIdProfile.UserId;
      console.log(trueReceiverId);
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
      const AllMessages = [...messagesSent, ...messagesReceived];
      res.json(AllMessages);
      console.log('messages', AllMessages);
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log('ya SITTER');
    try {
      const receiverIdProfile = await ParentProfile.findOne({ where: { id: receiverId } });
      const trueReceiverId = receiverIdProfile.UserId;
      console.log('receiverIdTrue', trueReceiverId);

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
      const AllMessages = [...messagesSent, ...messagesReceived];
      res.json(AllMessages);
      console.log('messages', AllMessages);
    } catch (error) {
      console.log(error);
    }
  }
});

router.post('/get-all-messages/from-dialogs', async (req, res) => {
  const { UserId, receiverId /* userRole */ } = req.body;
  console.log(req.body);
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
    console.log('messages', AllMessages);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
