const Board = require("../models/board");
const List = require("../models/list");
const Card = require("../models/card");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const getBoards = (req, res, next) => {
  Board.find({}, "title _id createdAt updatedAt")
    .populate("lists")
    .then((boards) => {
      res.json({
        boards,
      });
    });
};

const createBoard = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    Board.create(req.body.board)
      .then((board) => {
        Board.find({ _id: board._id }, "title _id createdAt updatedAt").then(
          (board) => res.json({ board })
        );
      })
      .catch((err) =>
        next(new HttpError("Creating board failed, please try again", 500))
      );
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

const getBoard = (req, res, next) => {
  const id = req.params.id;
  Board.findById(id)
    .populate({
      path: "lists",
      populate: {
        path: "cards",
      },
    })
    .then((board) => {
      res.json(board);
    })
    .catch((err) => next(new HttpError("Board doesn't exist", 404)));
};

const addListToBoard = (req, res, next) => {
  Board.findByIdAndUpdate(req.body.boardId, { $addToSet: {
    lists: req.list._id
  }}).then(() => next())
}

exports.getBoards = getBoards;
exports.getBoard = getBoard;
exports.createBoard = createBoard;
exports.addListToBoard = addListToBoard;
