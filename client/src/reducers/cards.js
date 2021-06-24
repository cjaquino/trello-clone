export default function cards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS": {
      const cards = action.board.lists.reduce((acc, list) => {
        return acc.concat(list.cards);
      }, []);
      return cards;
    }
    case "CREATE_CARD_SUCCESS": {
      return state.concat(action.card);
    }
    default:
      return state;
  }
}
