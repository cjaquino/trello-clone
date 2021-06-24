const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  title: {
    type: String,
    required: [true, "The Card title is required"],
  },
  dueDate: Date,
  labels: [
    {
      type: String,
    },
  ],
  description: String,
  listId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "The Card listId is required"],
    ref: "List",
  },
  boardId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "The Card boardId is required"],
    ref: "Board",
  },
  position: {
    type: Number,
  },
  commentsCount: Number,
});

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;
