const router = require('express').Router();
const { ParentReview } = require('../../db/models');

router.post('/review-parent', async (req, res) => {
  try {
    const {
      id, raiting, reviewText, ParentProfileId,
    } = req.body;
    const newReview = await ParentReview.create({
      UserId: id, raiting, reviewText, ParentProfileId,
    });
  } catch (error) {
    console.log(error);
  }
});
