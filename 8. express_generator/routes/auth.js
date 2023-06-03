const express = require('express');
const { Login, getMe, Logout } = require('../controller/auth');
const router = express.Router();

router.post('/login', Login);
router.get('/me', getMe);
router.get('/logout', Logout);

module.exports = router;
