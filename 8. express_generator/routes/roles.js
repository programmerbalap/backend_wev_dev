const express = require('express');
const router = express.Router();
const { getRole, deleteRole, createRole } = require('../controller/roleController');

router.get('/roles', getRole);
router.post('/roles', createRole);
router.delete('/role/:id', deleteRole);

module.exports = router;
