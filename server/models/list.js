const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "The List title is required"],
    },
    boardId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "The List boardId is required"],
      ref: "Board",
    },
    position: {
      type: Number,
      default: 65535,
    },
    cards: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Card",
      },
    ],
  },
  { timestamps: true }
);

const List = mongoose.model("List", ListSchema);

module.exports = List;
