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
      console.log(list);

      List.create(list)
        .then((newList) => {
          List.findById(newList._id, "title _id createdAt updatedAt position boardId").then(
            (newList) => res.json(newList)
          );
        })
        .catch((err) =>
          next(new HttpError("Creating list failed, please try again", 500))
        );
    } else {
      return next(new HttpError("The input field is empty.", 404));
    }
  };

exports.createList = createList;