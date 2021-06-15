const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    title: {
      type: String,
      required: [true, 'The Card title is required']
    },
    dueDate: Date,
    labels: [
      {
        type: String
      }
    ],
    description: String,
    listId: {
      type: Number,
      required: [true, 'The Card listId is required']
    },
    boardId: {
      type: Number,
      required: [true, 'The Card boardId is required']
    },
    position: {
      type: Number,
      required: [true, 'The Card position is required']
    },
    commentsCount: Number,
  }
)

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;