const Card = require("../models/card");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const getCard = (req, res, next) => {
  const id = req.params.id;
  Card.findById(id)
    .populate("comments")
    .populate("actions")
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

const updateCard = (req, res, next) => {
  Card.findById(req.params.id)
    .then((card) => {
      card.title = req.body.card.title || card.title;
      card.listId = req.body.card.listId || card.listId;
      card.description = req.body.card.description || card.description;
      card.position = req.body.card.position || card.position;
      card.archived = req.body.card.archived === undefined ? card.archived : req.body.card.archived;
      card.dueDate = req.body.card.dueDate || card.dueDate;
      card.completed = req.body.card.completed === undefined ? card.completed : req.body.card.completed;
      card.labels = req.body.card.labels || card.labels;
      card.save().then(() => {
        req.card = card;
        next();
      });
    })
    .catch((err) =>
      next(new HttpError("Update card failed, please try again", 500))
    );
};

const sendCard = (req, res, next) => {
  res.json(req.card)
}

const addCommentToCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.body.cardId, { $addToSet: {
    comments: req.comment._id
  }}).then(() => next())
}

const addActionsToCard = (req, res, next) => {
  let actionIds = req.actions.map(a => a._id);

  Card.findByIdAndUpdate(req.params.id, { $addToSet: {
    actions: { $each: actionIds }
  }}).then(() => next());
}

const findCard = (req, res, next) => {
  Card.findById(req.params.id).then((card) => {
    req.card = card
    next();
  })
}

exports.getCard = getCard;
exports.createCard = createCard;
exports.sendCard = sendCard;
exports.findCard = findCard;
exports.addCommentToCard = addCommentToCard;
exports.updateCard = updateCard;
exports.addActionsToCard = addActionsToCard;