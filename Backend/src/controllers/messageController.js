const asyncHandler = require("../middlewares/asyncHandler");
const Message = require("../models/message");
const sendEmail = require("../utils/sendEmail");


// SEND MESSAGE
const sendMessage = asyncHandler(
  async (req, res) => {

    const {
      name,
      email,
      message,
    } = req.body;

    // create message
    const newMessage =
      await Message.create({

        name,
        email,
        message,

      });

      // send email notification
        await sendEmail(
            name,
            email,
            message
        );

    res.status(201).json({
      success: true,
      message:
        "Message sent successfully",
      newMessage,
    });

  }
);

// GET ALL MESSAGES
const getMessages = asyncHandler(
  async (req, res) => {

    const messages =
      await Message.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      messages,
    });

  }
);

// TOGGLE READ STATUS
const toggleReadStatus =
  asyncHandler(async (req, res) => {

    const message =
      await Message.findById(
        req.params.id
      );

    // check exists
    if (!message) {

      return res.status(404).json({
        success: false,
        message: "Message not found",
      });

    }

    // toggle read status
    message.isRead =
      !message.isRead;

    await message.save();

    res.status(200).json({
      success: true,
      message:
        "Message status updated",
      updatedMessage: message,
    });

  });

// DELETE MESSAGE
const deleteMessage =
  asyncHandler(async (req, res) => {

    const message =
      await Message.findById(
        req.params.id
      );

    // check exists
    if (!message) {

      return res.status(404).json({
        success: false,
        message: "Message not found",
      });

    }

    await message.deleteOne();

    res.status(200).json({
      success: true,
      message:
        "Message deleted successfully",
    });

  });

module.exports = {
  sendMessage,
  getMessages,
  toggleReadStatus,
  deleteMessage,
};