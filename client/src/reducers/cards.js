export default function cards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS": {
      let cards = action.payload.board.lists.map(l => l.cards).flat();

      return cards;
    }
    case "CARD_ADDED_SUCCESS": {
      return state.concat(action.card);
    }
    default:
      return state;
  }
}
