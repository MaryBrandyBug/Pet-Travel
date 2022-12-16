const router = require('express').Router();
const { SitterProfile, User, Dialog } = require('../../db/models');

router.get('/all-sitters/:id', async (req, res) => {
  try {
    const sitter = await SitterProfile.findOne({ where: { id: req.params.id }, include: User });
    const sitterData = sitter.get();
    res.json(sitterData);
  } catch (error) {
    console.log(error);
  }
});

router.post('/all-sitters/chat/:id', async (req, res) => {
  try {
    const { userFrom, userTo } = req.body;
    const check = await Dialog.findOne({ where: { userFrom, userTo } });
    if (!check) {
      await Dialog.create({
        userFrom,
        userTo,
      });
      await Dialog.create({
        userFrom: userTo,
        userTo: userFrom,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
