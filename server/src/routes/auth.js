const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

router.post('/signup', async (req, res) => {
  try {
    const {
      email, name, password, role,
    } = req.body;
    console.log(role);
    const hashedPass = await bcrypt.hash(password, 10);
    const user = await User.findOne({ where: { email } });
    if (!user) {
      console.log(user);
      const newUser = await User.create({
        name, email, password: hashedPass, role,
      });
      const auth = newUser.get();
      delete auth.password;
      delete auth.createdAt;
      delete auth.updatedAt;
      req.session.auth = auth;
      console.log(auth);
      return res.json(auth);
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
});

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);
    const user = await User.findOne({ where: { email }, raw: true });
    if (!user) {
      return res.status(401).json({ msg: 'Try again' });
    }
    const isUser = await bcrypt.compare(password, user.password);
    if (isUser) {
      delete user.password;
      req.session.auth = user;
      return res.json(user);
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
});

module.exports = router;
