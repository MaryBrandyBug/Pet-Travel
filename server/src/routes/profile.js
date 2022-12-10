const router = require('express').Router();
const e = require('express');
const {
  ParentProfile, Pet, ParentReview, SitterProfile,
} = require('../../db/models');

router.post('/create-parent-profile', async (req, res) => {
  try {
    const {
      UserId, title, country, city, introduction, location, responsibilities, dateSince1,
      dateUntil1, dateSince2, dateUntil2, dateSince3, dateUntil3,
      pets,
    } = req.body;
    console.log(req.body);
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
    });
    console.log('🚀🚀🚀 =>=>=> file: Profile.js:29 =>=>=> router.post =>=>=> parent', parent);
    const parentData = parent.get();
    console.log('🚀🚀🚀 =>=>=> file: Profile.js:32 =>=>=> router.post =>=>=> parentData', parentData);
    delete parentData.createdAt;
    delete parentData.updatedAt;
    const truePets = pets.filter((el) => el.type);
    // const ageNumber = truePets.map((el) => el.petAge = Number(el.petAge));
    // const addProfileId = truePets.map((el) => el.ParentProfileId = parent.id)
    const ageNumber = truePets.map((el) => Number(el.petAge));
    const addProfileId = truePets.map((el) => el.ParentProfileId = parent.id);
    console.log(truePets);
    const pet = await Pet.bulkCreate(truePets);
    console.log('🚀🚀🚀 =>=>=> file: Profile.js:41 =>=>=> router.post =>=>=> pet', pet)
    return res.json({ parentData, pet });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
});

router.post('/create-sitter-profile', async (req, res) => {
  try {
    const {
      status, country, city, aboutMe, cats, dogs, fish, horses, birds, reptiles, smallPets, UserId,
    } = req.body;
    const sitter = await SitterProfile.create({
      status, country, city, aboutMe, cats, dogs, fish, horses, birds, reptiles, smallPets, UserId,
    });
    const sitterData = sitter.get();
    res.json({ sitterData });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
});

module.exports = router;
