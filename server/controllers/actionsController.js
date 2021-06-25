const Action = require("../models/action");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const createActions = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    Action.create(req.actions)
      .then((newActions) => {
        req.actions = newActions;  
        next()
      })
      .catch((err) =>
        next(new HttpError("Creating action failed, please try again", 500))
      );
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

const buildActionsFromReq = (req, res, next) => {
  let oldCard = req.card;
  let newCard = req.body.card;
  let actions = [];

  Object.keys(newCard).forEach(key => {
    if (oldCard[key] === undefined) {
      actions.push({
        cardId: req.params.id,
        description: `${key} was added`,
      });
    } else if (newCard[key] === "") {
      actions.push({
        cardId: req.params.id,
        description: `${key} was removed`
      });
    } else if (newCard[key] !== oldCard[key]) {
      actions.push({
        cardId: req.params.id,
        description:`${key} was changed`
      });
    }
  });

  req.actions = actions;
  next();
};

exports.createActions = createActions;
exports.buildActionsFromReq = buildActionsFromReq;