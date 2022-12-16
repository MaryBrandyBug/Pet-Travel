const router = require('express').Router();
const {
  ParentProfile, Pet, ParentReview, SitterProfile, User,
} = require('../../db/models');

router.get('/all-sitters', async (req, res) => {
  try {
    const allSitters = await SitterProfile.findAll({ where: { published: true }, include: User });
    res.json({ allSittersProfiles: allSitters });
  } catch (error) {
    console.log(error);
  }
});

router.get('/all-parents', async (req, res) => {
  try {
    const allParents = await ParentProfile.findAll({ where: { published: true } });
    const pets = await Pet.findAll();
    res.json({ allParentsProfiles: allParents, allPets: pets });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
