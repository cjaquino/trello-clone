const express = require("express");
const router = express.Router();
const boardsController = require("../controllers/boardsController");
const listsController = require("../controllers/listsController");
const cardsController = require("../controllers/cardsController");
const commentsController = require("../controllers/commentsController");
const actionsController = require("../controllers/actionsController");
const { validateBoard } = require("../validators/validators");

router.get("/boards", boardsController.getBoards);

router.post("/boards", validateBoard, boardsController.createBoard);

router.get("/boards/:id", boardsController.getBoard);

router.post(
  "/lists",
  listsController.createList,
  boardsController.addListToBoard,
  listsController.sendList
);

router.put("/lists/:id", listsController.updateList, listsController.sendList);

router.get("/cards/:id", cardsController.getCard);

router.post(
	"/cards",
	listsController.findList,
	cardsController.createCard,
	listsController.addCardToList,
	cardsController.sendCard
);

router.post(
	"/comments",
	commentsController.createComment,
	cardsController.addCommentToCard,
	commentsController.sendComment
);

router.put(
	"/cards/:id",
	cardsController.findCard,
	actionsController.buildActionsFromReq,
	cardsController.updateCard,
	actionsController.createActions,
	cardsController.addActionsToCard,
	cardsController.sendCard
);

module.exports = router;
