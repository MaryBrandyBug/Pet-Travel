const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.put('/settings', async (req, res) => {
  try {
    const {
      email,
      name,
      role,
      surname,
      inst,
      telegram,
      facebook,
      id,
    } = req.body;

    const userProfileData = await User.findOne({ where: { id } });
    const user = await userProfileData.update({
      id: req.body.id,
      email: req.body.email,
      name: req.body.name,
      role: req.body.role,
      surname: req.body.surname,
      inst: req.body.inst,
      telegram: req.body.telegram,
      facebook: req.body.facebook,
    });
    // const user = await User.findByPk(id);
    console.log(user);
    const result = user.get();
    delete result.password;
    req.session.auth = result;
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});
router.put('/settings/pass', async (req, res) => {
  try {
    const { password, id } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);
    const userProfileData = await User.findOne({ where: { id } });

    await userProfileData.update({
      password: hashedPass,
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

router.delete('/settings', async (req, res) => {
  console.log('req.body', req.body);
  const { id } = req.body;
  await User.destroy({ where: { id } });
  req.session.destroy();
  res.clearCookie('Username');
  res.sendStatus(200);
});

module.exports = router;
