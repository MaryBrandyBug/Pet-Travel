const router = require('express').Router();
const { ParentProfile, Pet, ParentReview } = require('../../db/models');

router.post('/create-parent-profile', async (req, res) => {
  try {
    const {
      title, introduction, location, responsibilities, dateSince1,
      dateUntil1, dateSince2, dateUntil2, dateSince3, dateUntil3,
      petName, petAge, petName2, petAge2, petName3, petAge3,
    } = req.body;
    const parent = await ParentProfile.create({
      title,
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
    const parentData = parent.get();
    delete parentData.createdAt;
    delete parentData.updatedAt;
    const pet = await Pet.create({ petName, petAge });
    const petData = pet.get();
    delete petData.createdAt;
    delete petData.updatedAt;
    let pet2Data;
    let pet3Data;
    if (petName2 !== '' && petAge2 !== '') {
      const pet2 = await Pet.create({ petName2, petAge: +petAge2 });
      pet2Data = pet2.get();
      delete pet2Data.createdAt;
      delete pet2Data.updatedAt;
    }
    if (petName3 !== '' && petAge3 !== '') {
      const pet3 = await Pet.create({ petName2, petAge: +petAge2 });
      pet3Data = pet3.get();
      delete pet3Data.createdAt;
      delete pet3Data.updatedAt;
    }
    if (!pet2Data && !pet3Data) {
      return res.json(parentData, petData);
    } if (pet2Data && !pet3Data) {
      return res.json(parentData, petData, pet2Data);
    } if (pet3Data && !pet2Data) {
      return res.json(parentData, petData, pet3Data);
    } if (pet2Data && pet3Data) {
      return res.json(parentData, petData, pet2Data, pet3Data);
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
});

module.exports = router;
