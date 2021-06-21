const Card = require("../models/card");
const HttpError = require("../models/httpError");

const getCard = (req, res, next) => {
  const id = req.params.id;
  Card.findById(id)
    .then((card) => {
      res.json(card);
    })
    .catch((err) => next(new HttpError("Card doesn't exist", 404)));
};

exports.getCard = getCard;