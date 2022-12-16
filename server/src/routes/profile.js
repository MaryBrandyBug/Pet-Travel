const router = require('express').Router();

const {
  ParentProfile, Pet, ParentReview, SitterProfile, User,
} = require('../../db/models');

router.post('/create-parent-profile', async (req, res) => {
  try {
    const {
      UserId, title, country, city, introduction, location, responsibilities, dateSince1,
      dateUntil1, dateSince2, dateUntil2, dateSince3, dateUntil3,
      pets,
    } = req.body;
    console.log('=====>>>> 👉👉👉 file: profile.js:14 👉👉👉 router.post 👉👉👉 pets', pets);
    // console.log(req.body);
    const parent = await ParentProfile.create({
      UserId,
      title,
      country,
      city,
      introduction,
      location,
      responsibilities,
      dateSince1,
      dateUntil1,
      dateSince2,
      dateUntil2,
      dateSince3,
      dateUntil3,
      parentPh1: '2022-12-16T10:50:56.144Z-mainmphotoparent.jpg',
      parentPh2: '2022-12-16T10:50:56.144Z-mainmphotoparent.jpg',
      parentPh3: '2022-12-16T10:50:56.144Z-mainmphotoparent.jpg',
      parentPh4: '2022-12-16T10:50:56.144Z-mainmphotoparent.jpg',
      parentPh5: '2022-12-16T10:50:56.144Z-mainmphotoparent.jpg',
    });
    const parentData = parent.get();
    delete parentData.createdAt;
    delete parentData.updatedAt;
    const truePets = pets.filter((el) => el.type);
    // const ageNumber = truePets.map((el) => el.petAge = Number(el.petAge));
    // const addProfileId = truePets.map((el) => el.ParentProfileId = parent.id)
    const ageNumber = truePets.map((el) => Number(el.petAge));
    const addProfileId = truePets.map((el) => el.ParentProfileId = parent.id);
    const pet = await Pet.bulkCreate(truePets);
    return res.json({ profile: parentData, pet });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
});

router.post('/create-sitter-profile', async (req, res) => {
  try {
    const {
      status,
      country,
      city,
      aboutMe,
      cats,
      dogs,
      fish,
      horses,
      birds,
      reptiles,
      smallPets,
      UserId,
    } = req.body;
    const sitterProfile = await SitterProfile.create({
      status,
      country,
      city,
      aboutMe,
      cats,
      dogs,
      fish,
      horses,
      birds,
      reptiles,
      smallPets,
      UserId,
      sitterPh1: '2022-12-16T10:46:10.788Z-mainphotoSitter.jpg',
      sitterPh2: '2022-12-16T10:46:10.788Z-mainphotoSitter.jpg',
      sitterPh3: '2022-12-16T10:46:10.788Z-mainphotoSitter.jpg',
      sitterPh4: '2022-12-16T10:46:10.788Z-mainphotoSitter.jpg',
      sitterPh5: '2022-12-16T10:46:10.788Z-mainphotoSitter.jpg',
    });
    const sitterData = sitterProfile.get();
    res.json({ sitter: sitterData });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
});

router.put('/sitter', async (req, res) => {
  try {
    const { published, id } = req.body;
    const profile = await SitterProfile.findOne({ where: { id } });
    const prof = profile.get();
    await profile.update({ published: !published });
    // console.log('prof', profile);
    res.json({ sitter: profile });
  } catch (error) {
    console.log(error);
  }
});

router.put('/parent', async (req, res) => {
  try {
    const { published, id } = req.body;
    const parentProfile = await ParentProfile.findOne({ where: { id } });
    const prof = parentProfile.get();
    await parentProfile.update({ published: !published });
    res.json({ profile: parentProfile });
  } catch (error) {
    console.log(error);
  }
});

router.put('/sitter/update-sitter-profile', async (req, res) => {
  try {
    const {
      status, country, city, aboutMe, cats, dogs, fish, horses, birds, reptiles, smallPets, UserId,
    } = req.body;
    const sitterProfile = await SitterProfile.findOne({ where: { UserId } });
    const profile = sitterProfile.get();
    await sitterProfile.update({
      status, country, city, aboutMe, cats, dogs, fish, horses, birds, reptiles, smallPets,
    });
    res.json({ sitter: sitterProfile });
  } catch (error) {
    console.log(error);
  }
});

router.put('/parent/update-parent-profile', async (req, res) => {
  try {
    const {
      title, country, city, introduction, location, responsibilities, dateSince1,
      dateUntil1, dateSince2, dateUntil2, dateSince3, dateUntil3, UserId, pets,
    } = req.body;
    const parentProfile = await ParentProfile.findOne({ where: { UserId } });
    console.log(pets[0]);
    const profile = parentProfile.get();
    await parentProfile.update({
      title,
      country,
      city,
      introduction,
      location,
      responsibilities,
      dateSince1,
      dateUntil1,
      dateSince2,
      dateUntil2,
      dateSince3,
      dateUntil3,
    });
    if (pets[0].petName) {
      const truePets = pets.filter((el) => el.type);
      const ageNumber = truePets.map((el) => Number(el.petAge));
      const addProfileId = truePets.map((el) => el.ParentProfileId = parentProfile.id);
      await Pet.bulkCreate(truePets);
    }
    const pet = await Pet.findAll({ where: { ParentProfileId: parentProfile.id } });
    res.json({ profile: parentProfile, pet });
  } catch (error) {
    console.log(error);
  }
});

router.delete('/parent/update-parent-profile', async (req, res) => {
  const { id, ParentProfileId } = req.body;
  await Pet.destroy({ where: { id } });
  const allPets = await Pet.findAll({ where: { ParentProfileId }, raw: true });
  console.log(allPets);
  res.json({ pet: allPets });
});

module.exports = router;
