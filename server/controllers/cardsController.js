const Card = require("../models/card");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const getCard = (req, res, next) => {
  const id = req.params.id;
  Card.findById(id)
    .then((card) => {
      res.json(card);
    })
    .catch((err) => next(new HttpError("Card doesn't exist", 404)));
};

const createCard = (req, res, next) => {
	const errors = validationResult(req);
  if (errors.isEmpty()) {
    let card = {
      listId: req.list._id,
      boardId: req.list.boardId,
      title: req.body.card.title,
    }
    Card.create(card)
      .then((newCard) => {
        req.card = newCard;
        next();
      })
      .catch((err) =>
        next(new HttpError("Creating card failed, please try again", 500))
      );
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
}

const sendCard = (req, res, next) => {
  res.json(req.card)
}

exports.getCard = getCard;
exports.createCard = createCard;
exports.sendCard = sendCard;