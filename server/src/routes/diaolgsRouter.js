const router = require('express').Router();
const { User, Dialog } = require('../../db/models');

router.get('/all-user-dialogs/:id', async (req, res) => {
  try {
    const dialogs = await Dialog.findAll({ where: { userFrom: req.params.id }, include: User });
    // const dialogsArr = await dialogs.dataValues;
    res.json(dialogs);
  } catch (error) {
    console.log(error);
  }
});
router.post('/all-user-dialogs/chat/:id', async (req, res) => {
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
