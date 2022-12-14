const router = require('express').Router();
const { Message } = require('../../db/models');

router.post('/get-all-messages', async (req, res) => {
  const { UserId, receiverId } = req.body;
  try {
    const messages = await Message.findAll({ where: { UserId, receiverId } });
    res.json(messages);
    console.log('messages.dataValues', messages);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
