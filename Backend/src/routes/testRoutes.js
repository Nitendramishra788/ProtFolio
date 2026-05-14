const express = require('express');
const { route } = require('../app');
const testController = require('../controllers/testController');
const router = express.Router();

router.get("/" , testController);

module.exports = router;