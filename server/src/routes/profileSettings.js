const router = require('express').Router();
const bcrypt = require('bcrypt');
const { where } = require('sequelize');
const filemiddleware = require('../middlewares/file');
const {
  User, SitterProfile, Pet, ParentProfile,
} = require('../../db/models');

router.post('/upload', filemiddleware.single('avatar'), async (req, res) => {

  try {
    if (req.file) {
      const userId = await User.findOne({ where: { id: req.body.id } });
      const addPhoto = await userId.update({ mainPhoto: req.file.filename });
      const result = addPhoto.get();
      delete result.password;
      // req.session.auth = result;
      res.json({ photo: req.file.filename, auth: result });
    }
  } catch (error) {
    console.log('=====>>>> 👉👉👉 file: upload.route.js:10 👉👉👉 router.post 👉👉👉 error', error);
  }
});
router.post('/uploadsitter', filemiddleware.single('avatar'), async (req, res) => {
  try {
    if (req.file) {
      const sitterId = await SitterProfile.findOne({ where: { id: req.body.id } });
      const addPhoto1 = await sitterId.update({ sitterPh1: req.file.filename });
      res.json({ addPhoto1 });
    }
  } catch (error) {
    console.log('=====>>>> 👉👉👉 file: profileSettings.js:32 👉👉👉 router.post 👉👉👉 error', error);
  }
});
router.post('/uploadsitter2', filemiddleware.single('avatar'), async (req, res) => {
  try {
    if (req.file) {
      const sitterId = await SitterProfile.findOne({ where: { id: req.body.id } });
      const addPhoto2 = await sitterId.update({ sitterPh2: req.file.filename });
      res.json({ addPhoto2 });
    }
  } catch (error) {
    console.log('=====>>>> 👉👉👉 file: profileSettings.js:32 👉👉👉 router.post 👉👉👉 error', error);
  }
});
router.post('/uploadsitter3', filemiddleware.single('avatar'), async (req, res) => {
  try {
    if (req.file) {
      const sitterId = await SitterProfile.findOne({ where: { id: req.body.id } });
      const addPhoto3 = await sitterId.update({ sitterPh3: req.file.filename });
      res.json({ addPhoto3 });
    }
  } catch (error) {
    console.log('=====>>>> 👉👉👉 file: profileSettings.js:32 👉👉👉 router.post 👉👉👉 error', error);
  }
});
router.post('/uploadsitter4', filemiddleware.single('avatar'), async (req, res) => {
  try {
    if (req.file) {
      const sitterId = await SitterProfile.findOne({ where: { id: req.body.id } });
      const addPhoto4 = await sitterId.update({ sitterPh4: req.file.filename });
      res.json({ addPhoto4 });
    }
  } catch (error) {
    console.log('=====>>>> 👉👉👉 file: profileSettings.js:32 👉👉👉 router.post 👉👉👉 error', error);
  }
});
router.post('/uploadsitter5', filemiddleware.single('avatar'), async (req, res) => {
  try {
    if (req.file) {
      const sitterId = await SitterProfile.findOne({ where: { id: req.body.id } });
      const addPhoto5 = await sitterId.update({ sitterPh5: req.file.filename });
      res.json({ addPhoto5 });
    }
  } catch (error) {
    console.log('=====>>>> 👉👉👉 file: profileSettings.js:32 👉👉👉 router.post 👉👉👉 error', error);
  }
});
router.post('/uploadparent1', filemiddleware.single('avatar'), async (req, res) => {
  try {
    if (req.file) {
      const parentId = await ParentProfile.findOne({ where: { id: req.body.id } });
      const addPhoto1 = await parentId.update({ parentPh1: req.file.filename });
      res.json({ addPhoto1 });
    }
  } catch (error) {
    console.log('=====>>>> 👉👉👉 file: profileSettings.js:32 👉👉👉 router.post 👉👉👉 error', error);
  }
});
router.post('/uploadparent2', filemiddleware.single('avatar'), async (req, res) => {
  try {
    if (req.file) {
      const parentId = await ParentProfile.findOne({ where: { id: req.body.id } });
      const addPhoto2 = await parentId.update({ parentPh2: req.file.filename });
      res.json({ addPhoto2 });
    }
  } catch (error) {
    console.log('=====>>>> 👉👉👉 file: profileSettings.js:32 👉👉👉 router.post 👉👉👉 error', error);
  }
});
router.post('/uploadparent3', filemiddleware.single('avatar'), async (req, res) => {
  try {
    if (req.file) {
      const parentId = await ParentProfile.findOne({ where: { id: req.body.id } });
      const addPhoto3 = await parentId.update({ parentPh3: req.file.filename });
      res.json({ addPhoto3 });
    }
  } catch (error) {
    console.log('=====>>>> 👉👉👉 file: profileSettings.js:32 👉👉👉 router.post 👉👉👉 error', error);
  }
});
router.post('/uploadparent4', filemiddleware.single('avatar'), async (req, res) => {
  try {
    if (req.file) {
      const parentId = await ParentProfile.findOne({ where: { id: req.body.id } });
      const addPhoto4 = await parentId.update({ parentPh4: req.file.filename });
      res.json({ addPhoto4 });
    }
  } catch (error) {
    console.log('=====>>>> 👉👉👉 file: profileSettings.js:32 👉👉👉 router.post 👉👉👉 error', error);
  }
});
router.post('/uploadparent5', filemiddleware.single('avatar'), async (req, res) => {
  console.log('=====>>>> 👉👉👉 file: profileSettings.js:84 👉👉👉 router.post 👉👉👉 req', req.body);

  try {
    if (req.file) {
      const parentId = await ParentProfile.findOne({ where: { id: req.body.id } });
      const addPhoto5 = await parentId.update({ parentPh5: req.file.filename });
      res.json({ addPhoto5 });
    }
  } catch (error) {
    console.log('=====>>>> 👉👉👉 file: profileSettings.js:32 👉👉👉 router.post 👉👉👉 error', error);
  }
});
router.post('/uploadPet/:id', filemiddleware.single('avatar'), async (req, res) => {
  try {
    if (req.file) {
      const petId = await Pet.findOne({ where: { id: req.body.id } });
      const addPhoto = await petId.update({ petPhoto: req.file.filename });
      const allPet = await Pet.findAll({ where: { ParentProfileId: req.body.parent } });
      // const result = addPhoto.get();
      res.json({ allPet });
    }
  } catch (error) {
    console.log('=====>>>> 👉👉👉 file: upload.route.js:10 👉👉👉 router.post 👉👉👉 error', error);
  }
});
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
      id,
      email,
      name,
      role,
      surname,
      inst,
      telegram,
      facebook,
    });
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
  const { id } = req.body;
  await User.destroy({ where: { id } });
  req.session.destroy();
  res.clearCookie('Username');
  res.sendStatus(200);
});

module.exports = router;
