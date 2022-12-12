const router = require('express').Router();
const bcrypt = require('bcrypt');

const {
  User, ParentProfile, Pet, SitterProfile,
} = require('../../db/models');

router.get('/', async (req, res) => {
  if (req.session?.auth) {
    if (req.session?.auth.role === 'parent') {
      const parentData = await ParentProfile.findOne({ where: { UserId: req.session?.auth.id }, raw: true });
      if (!parentData) {
        return res.json({ auth: req.session?.auth, parent: null });// null
      }
      const petData = await Pet.findAll({ where: { ParentProfileId: parentData.id }, raw: true });
      res.json({
        auth: req.session?.auth, parent: parentData, pet: petData, sitter: null,
      });
    } else {
      const sitterData = await SitterProfile.findOne({ where: { UserId: req?.session.auth.id }, raw: true });
      res.json({ auth: req.session?.auth, sitter: sitterData });
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
    console.log(req.body);
    console.log('user post sign up', user);
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

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);
    const auth = await User.findOne({ where: { email }, raw: true });
    if (!auth) {
      return res.status(401).json({ msg: 'Try again' });
    }
    const isUser = await bcrypt.compare(password, auth.password);
    if (isUser) {
      delete auth.password;
      req.session.auth = auth;
      return res.json(auth);
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('Username');
  res.sendStatus(200);
});

module.exports = router;
