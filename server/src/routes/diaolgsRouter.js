const router = require('express').Router();
const { User, Dialog } = require('../../db/models');

router.get('/all-user-dialogs/:id', async (req, res) => {
  try {
    const dialogs = await Dialog.findAll({ where: { userFrom: req.params.id }, include: User });
    res.json(dialogs);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
