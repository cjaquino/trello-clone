const Comment = require("../models/comment");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const createComment = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    let comment = {
      cardId: req.body.cardId,
      text: req.body.comment.text,
    }
    Comment.create(comment)
      .then((newComment) => {
        req.comment = newComment;
        next();
      })
      .catch((err) =>
        next(new HttpError("Creating comment failed, please try again", 500))
      );
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

const sendComment = (req, res, next) => {
  res.json(req.comment);
};

exports.createComment = createComment;
exports.sendComment = sendComment;