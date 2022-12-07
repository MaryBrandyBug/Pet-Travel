const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

router.post('/signup', async (req, res) => {
  try {
    const {
      email, name, password, role,
    } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);
    const user = await User.findOne({ where: { email } });
    if (!user) {
      const newUser = await User.create({
        name, email, password: hashedPass, role,
      });
      const auth = newUser.get();
      delete auth.password;
      delete auth.createdAt;
      delete auth.updatedAt;
      req.session.auth = auth;
      return res.json(auth);
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
});

module.exports = router;
