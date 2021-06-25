const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActionSchema = new Schema({
  description: {
    type: String,
    required: [true, "The Action description is required"],
  },
  cardId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "The Action cardId is required"],
    ref: "Card",
  },
},
  {
    timestamps: true,
  },
);

const Action = mongoose.model('Action', ActionSchema);

module.exports = Action;