const router = require('express').Router();
const { ParentProfile, Pet, ParentReview } = require('../../db/models');

router.post('/create-parent-profile', async (req, res) => {
  try {
    const {
      UserId, title, country, city, introduction, location, responsibilities, dateSince1,
      dateUntil1, dateSince2, dateUntil2, dateSince3, dateUntil3,
      petName, petAge, petName2, petAge2, petName3, petAge3, type, type2, type3,
    } = req.body;
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
    const parentData = parent.get();
    delete parentData.createdAt;
    delete parentData.updatedAt;
    const pet = await Pet.create({
      petName, petAge: +petAge, ParentProfileId: parentData.id, type,
    });
    const petData = pet.get();
    delete petData.createdAt;
    delete petData.updatedAt;
    let pet2Data;
    let pet3Data;
    if (petName2 !== '' && petAge2 !== '') {
      const pet2 = await Pet.create({
        petName: petName2, petAge: +petAge2, ParentProfileId: parent.id, type: type2,
      });
      pet2Data = pet2.get();
      delete pet2Data.createdAt;
      delete pet2Data.updatedAt;
    }
    if (petName3 !== '' && petAge3 !== '') {
      const pet3 = await Pet.create({
        petName: petName3, petAge: +petAge3, ParentProfileId: parent.id, type: type3,
      });
      pet3Data = pet3.get();
      delete pet3Data.createdAt;
      delete pet3Data.updatedAt;
    }
    if (!pet2Data && !pet3Data) {
      return res.json({ parentData, petData });
    } if (pet2Data && !pet3Data) {
      return res.json({ parentData, petData, pet2Data });
    } if (pet3Data && !pet2Data) {
      return res.json({ parentData, petData, pet3Data });
    } if (pet2Data && pet3Data) {
      return res.json({
        parentData, petData, pet2Data, pet3Data,
      });
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
});

module.exports = router;
