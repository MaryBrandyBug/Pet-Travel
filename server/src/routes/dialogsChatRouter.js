const router = require('express').Router();
const { Message } = require('../../db/models');

router.post('/get-all-messages', async (req, res) => {
  const { UserId, receiverId } = req.body;
  try {
    const messagesSent = await Message.findAll({ where: { UserId, receiverId }, raw: true });
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
