export default function cards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS": {
      let cards = [];

      if (action.payload.board.lists.cards !== undefined) {
        cards = action.payload.board.lists.cards;
      }

      return cards;
    }
    case "CARD_ADDED_SUCCESS": {
      return state.concat(action.card);
    }
    default:
      return state;
  }
}
