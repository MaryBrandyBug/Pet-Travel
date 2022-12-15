const router = require('express').Router();

const {
  ParentProfile, User, Dialog, Pet,
} = require('../../db/models');

router.get('/all-parents/:id', async (req, res) => {
  try {
    const parent = await ParentProfile.findOne({ where: { id: req.params.id }, include: [User, Pet] });
    console.log(parent);
    const parentData = parent.get();
    res.json(parentData);
  } catch (error) {
    console.log(error);
  }
});
router.post('/all-parents/chat/:id', async (req, res) => {
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
