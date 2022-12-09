const router = require('express').Router();
const bcrypt = require('bcrypt');

const {
  User, ParentProfile, Pet, SitterProfile,
} = require('../../db/models');

router.get('/', async (req, res) => {
  if (req.session?.auth) {
    if (req.session?.auth.role === 'parent') {
      const parentData = await ParentProfile.findOne({ where: { UserId: req?.session.auth.id } });
      const petData = await Pet.findAll({ where: { ParentProfileId: parentData.id } });
      res.json({
        auth: req.session?.auth, parent: parentData, pet: petData, sitter: null,
      });
    } else {
      const sitterData = await SitterProfile.findOne({ where: { UserId: req?.session.auth.id } });
      // const sitterData = sitter.get();
      res.json({ auth: req.session.auth, sitter: sitterData, profile: null });
    }
  } else {
    res.json({ auth: null, petParent: {} });
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

router.get('/logout', (req, res) => {
  console.log('here');
  req.session.destroy();
  res.clearCookie('Username');
  res.sendStatus(200);
});

module.exports = router;
