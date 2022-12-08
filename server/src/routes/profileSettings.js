const router = require('express').Router();
const { User } = require('../../db/models');

router.put('/settings', async (req, res) => {
  try {
    const {
      email,
      name,
      password,
      role,
      surname,
      inst,
      telegram,
      facebook,
      id,
    } = req.body;

    const userProfileData = await User.findOne({ where: { id } });
    await userProfileData.update({
      email,
      name,
      password,
      role,
      surname,
      inst,
      telegram,
      facebook,
    });
  } catch (error) {
    console.log(error);
  }
});

router.delete('/settings', async (req, res) => {
  const { id } = req.body;
  await User.destroy({ where: { id } });
  res.redirect('/');
});

module.exports = router;
