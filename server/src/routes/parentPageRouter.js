const router = require('express').Router();
const { ParentProfile, User, Pet } = require('../../db/models');

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

module.exports = router;
