const express = require('express');
const tourController = require('../contollers/toursController');

const router = express.Router();

router.param('id',tourController.checkValidityOfTourId);

router.route('/').get(tourController.getAllTours).post(tourController.checkToursBody,tourController.addTour);
router.route('/:id').get(tourController.getSingleTours).patch(tourController.updateTour).delete(tourController.deleteTour);




module.exports = router;
