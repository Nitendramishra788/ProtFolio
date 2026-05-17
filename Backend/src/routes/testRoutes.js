const express = require('express');
const { route } = require('../app');
const testController = require('../controllers/testController');
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

router.get(
  "/protected",
  authMiddleware,
  (req, res) => {

    res.json({
      success: true,
      message: "Protected route accessed",
      admin: req.admin,
    });

  }
);

router.get("/" , testController);

module.exports = router;