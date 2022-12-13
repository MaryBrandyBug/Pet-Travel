const router = require('express').Router();
const { ParentProfile, User } = require('../../db/models');

router.get('/all-parents/:id', async (req, res) => {
  try {
    const parent = await ParentProfile.findOne({ where: { id: req.params.id }, include: User });
    const parentData = parent.get();
    res.json(parentData);
    console.log(parentData);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
