const router = require('express').Router();
const { ParentReview, User } = require('../../db/models');

router.post('/review-parent/:id', async (req, res) => {
  try {
    const { raiting, reviewText, ParentProfileId } = req.body;
    // console.log('req.body>>>>', req.body);
    const userId = req.session.auth.id;
    const createReview = await ParentReview.create({
      UserId: userId,
      raiting: 4,
      reviewText,
      ParentProfileId,
    });
    res.json(createReview);
  } catch (error) {
    console.log(error);
  }
});

router.get('/profile/reviews', async (req, res) => {
  try {
    const userId = req.session.auth.id;
    const allReviews = await ParentReview.findAll({ where: { ParentProfileId: userId }, include: User });
    res.json(allReviews);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
