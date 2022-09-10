const express = require('express');
const userController = require('../contollers/userController');
const router = express.Router();


router.route('/').get(userController.getAllUsers).post(userController.addUser);
router.route('/:id').get(userController.getSingleUser).patch(userController.updateUser).delete(userController.deleteUser);



module.exports = router;