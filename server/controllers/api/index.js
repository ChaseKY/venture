const router = require('express').Router();

const userRoutes = require('./userRoutes');
const reviewRoutes = require('./reviewRoutes');
const savedHikeRoutes = require('./savedHikeRoutes');

router.use('/user', userRoutes);
router.use('/review', reviewRoutes);
router.use('/savedHike', savedHikeRoutes);

module.exports = router;
