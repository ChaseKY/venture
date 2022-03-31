const router = require('express').Router();
const { Reviews } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newReview = await Reviews.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.json(newReview);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
