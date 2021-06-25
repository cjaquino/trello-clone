const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  text: {
    type: String,
    required: [true, "The Comment text is required"],
  },
  cardId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "The Comment cardId is required"],
    ref: "Card",
  },
},
  {
    timestamps: true,
  },
);

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;