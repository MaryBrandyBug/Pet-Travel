const router = require('express').Router();
const { AppReview, User } = require('../../db/models');

router.post('/appewview', async (req, res) => {
  try {
    const {
      id, reviewText, rating, title,
    } = req.body;
    console.log('πππ =>=>=> file: appReview.js:9 =>=>=> router.post =>=>=> id', id);
    const newAppReview = await AppReview.create({
      UserId: id,
      title,
      reviewText,
      raiting: rating,
    });
    return res.json({ re: 'ΠΏΡΠΈΠ²Π΅Ρ!' });
  } catch (error) {
    console.log('=====>>>> πππ file: appReview.js:8 πππ router.post πππ error', error);
  }
});
module.exports = router;

router.get('/appreviews', async (req, res) => {
  try {
    const allReviews = await AppReview.findAll({ include: User });
    res.json(allReviews);
  } catch (error) {
    console.log(error);
  }
});
