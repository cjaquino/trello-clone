const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
    title: {
      type: String,
      required: [true, "The List title is required"]
    },
    boardId: {
      type: Number,
      required: [true, "The List boardId is required"]
    },
    position: {
      type: Number,
      required: [true, "The List position is required"]
    },
  },
  { timestamps: true }
)

const List = mongoose.model('List', ListSchema);

module.exports = List;