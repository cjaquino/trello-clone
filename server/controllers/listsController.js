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
          next()
        })
        .catch((err) =>
          next(new HttpError("Creating list failed, please try again", 500))
        );
    } else {
      return next(new HttpError("The input field is empty.", 404));
    }
  };

const sendList = (req, res, next) => {
  res.json(req.list)
}

exports.createList = createList;
exports.sendList = sendList;