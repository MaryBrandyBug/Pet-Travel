const router = require('express').Router();
const { User } = require('../../db/models');

router.put('/settings', async (req, res) => {
  console.log('REQ', req.body);

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
    console.log(userProfileData);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
