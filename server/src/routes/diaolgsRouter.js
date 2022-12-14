const router = require('express').Router();
const { ParentProfile, User, Dialog } = require('../../db/models');

router.get('/all-user-dialogs/:id', async (req, res) => {
  try {
    const dialogs = await Dialog.findAll({ where: { userFrom: req.params.id }, include: User });
    // const dialogsArr = await dialogs.dataValues;
    res.json(dialogs);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
