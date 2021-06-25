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
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  }],
  actions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Action"
  }],
  completed: Boolean,
  archived: Boolean,
},
  {
    toJSON: { virtuals: true },
  }
);

CardSchema
  .virtual('commentsCount')
  .get(function () {
    return this.comments.length;
  });

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;
