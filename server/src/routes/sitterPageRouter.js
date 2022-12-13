const router = require('express').Router();
const { SitterProfile, User } = require('../../db/models');

router.get('/all-sitters/:id', async (req, res) => {
  try {
    const sitter = await SitterProfile.findOne({ where: { id: req.params.id } });
    const sitterData = sitter.get();
    console.log(sitterData);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
