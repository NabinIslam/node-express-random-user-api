const express = require('express');
const usersControllers = require('../../controllers/users.controllers');

const router = express.Router();

router.get('/all', usersControllers.getAllUsers);

router.get('/random', usersControllers.getARandomUser);

router.post('/save', usersControllers.postUser);

router.patch('/update', usersControllers.updateUser);

router.patch('/bulk-update', usersControllers.bulkUpdateUser);

router.delete('/delete', usersControllers.deleteUser);

module.exports = router;
