const express = require('express');
const { getUsers, createUser, deleteUser } = require('../controller/userController');
const { VerifyUser, adminOnly } = require('../middleware/middleware');
const router = express.Router();

router.get('/users', VerifyUser, getUsers);
router.post('/users', VerifyUser, adminOnly, createUser);
router.delete('/user/:id', VerifyUser, adminOnly, deleteUser);

module.exports = router;
