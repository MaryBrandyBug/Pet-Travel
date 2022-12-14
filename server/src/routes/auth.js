const router = require('express').Router();
const bcrypt = require('bcrypt');

const {
  User, ParentProfile, Pet, SitterProfile,
} = require('../../db/models');

router.get('/', async (req, res) => {
  if (req.session?.auth) {
    const user = await User.findByPk(req.session.auth.id);
    if (!user) {
      return res.json({ auth: null });
    }
    if (req.session?.auth.role === 'parent') {
      const parentData = await ParentProfile.findOne({ where: { UserId: req.session?.auth.id }, raw: true });
      if (!parentData) {
        return res.json({ auth: user, parent: null });// null
      }
      const petData = await Pet.findAll({ where: { ParentProfileId: parentData.id }, raw: true });
      res.json({
        auth: user, parent: parentData, pet: petData, sitter: null,
      });
    } else {
      const sitterData = await SitterProfile.findOne({ where: { UserId: req?.session.auth.id }, raw: true });
      res.json({ auth: user, sitter: sitterData });
    }
  } else {
    console.log('error');
    res.json({ auth: null });
  }
});

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
      return res.json({ auth });
    }
    return res.json({ error: 'Такой пользователь уже зарегистрирован' });
  } catch (error) {
    console.log(error);
  }
});

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);
    const user = await User.findOne({ where: { email }, raw: true });
    if (!user) {
      return res.json({ error: 'Неверная почта или пароль' });
    }
    const isUser = await bcrypt.compare(password, user.password);
    if (isUser) {
      delete user.password;
      req.session.auth = user;
      return res.json({ auth: user });
    }
    return res.json({ error: 'Неверная почта или пароль' });
  } catch (error) {
    return console.log(error);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('Username');
  res.sendStatus(200);
});

module.exports = router;
