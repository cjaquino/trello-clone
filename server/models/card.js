const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  title: {
    type: String,
    required: [true, 'The Card title is required']
  },
  description: {
  	type: String,
  },
  labels: [String],
  position: {
  	type: Number,
  	default: 65535
  },
  boardId: {type: Schema.Types.ObjectId, ref: 'Board'},
  listId: {type: Schema.Types.ObjectId, ref: 'List'},
  dueDate: {
  	type: Date,
  	default: null
  },
  completed: {
  	type: Boolean,
  	default: false
  },
}, {timestamps:true})

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;