const List = require("../models/list");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const createList = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    let list = {
      boardId: req.body.boardId,
      title: req.body.list.title,
    };

    List.create(list)
      .then((newList) => {
        req.list = newList;
        next();
      })
      .catch((err) =>
        next(new HttpError("Creating list failed, please try again", 500))
      );
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

const updateList = (req, res, next) => {
  List.findById(req.params.id)
    .then((list) => {
      list.title = req.body.title || list.title;
      list.position = req.body.position || list.position;
      list.save().then(() => {
        req.list = list;
        next();
      });
    })
    .catch((err) =>
      next(new HttpError("Update list failed, please try again", 500))
    );
};

const sendList = (req, res, next) => {
  res.json(req.list);
};

const addCardToList = (req, res, next) => {
  List.findByIdAndUpdate(req.body.listId, { $addToSet: {
    cards: req.card._id
  }}).then(() => next())
}

const findList = (req, res, next) => {
  List.findById(req.body.listId).then((list) => {
    req.list = list
    next();
  })
}

exports.createList = createList;
exports.sendList = sendList;
exports.updateList = updateList;
exports.addCardToList = addCardToList;
exports.findList = findList;