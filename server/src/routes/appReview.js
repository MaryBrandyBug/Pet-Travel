const router = require('express').Router();
const { AppReview } = require('../../db/models');

router.post('/appewview', async (req, res) => {
  try {
    const {
      id, reviewText, rating, title,
    } = req.body;
    const newAppReview = await AppReview.create({
      UserId: id,
      title,
      reviewText,
      raiting: rating,
    });
    return res.json({ re: 'привет!' });
  } catch (error) {
    console.log('=====>>>> 👉👉👉 file: appReview.js:8 👉👉👉 router.post 👉👉👉 error', error);
  }
});
module.exports = router;
