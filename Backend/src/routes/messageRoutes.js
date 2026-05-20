const express = require("express");

const router = express.Router();

const {
  sendMessage,
  getMessages,
  toggleReadStatus,
  deleteMessage,
} = require(
  "../controllers/messageController"
);

const authMiddleware = require(
  "../middlewares/authMiddleware"
);

// SEND MESSAGE
router.post(
  "/",
  sendMessage
);

// GET ALL MESSAGES
router.get(
  "/",
  authMiddleware,
  getMessages
);

// TOGGLE READ STATUS
router.put(
  "/:id",
  authMiddleware,
  toggleReadStatus
);

// DELETE MESSAGE
router.delete(
  "/:id",
  authMiddleware,
  deleteMessage
);

module.exports = router;