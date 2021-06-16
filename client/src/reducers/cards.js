export default function cards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARDS_SUCCESS": {
      // TODO
      return state.concat;
    }
    case "CARD_ADDED_SUCCESS": {
      return state.concat(action.card);
    }
    default:
      return state;
  }
}
