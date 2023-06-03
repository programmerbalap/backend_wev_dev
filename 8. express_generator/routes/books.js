const express = require('express');
const { getBooks, createBooks, deleteBooks } = require('../controller/bookController');
const { VerifyUser, adminOnly } = require('../middleware/middleware');
const router = express.Router();

/* GET users listing. */
router.get('/books', VerifyUser, getBooks);
router.post('/books', VerifyUser, adminOnly, createBooks);
router.delete('/book/:id', VerifyUser, adminOnly, deleteBooks);

module.exports = router;
