export default function lists(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARDS_SUCCESS": {
      // TODO
      return state.concat;
    }
    case "LIST_ADDED_SUCCESS": {
      return state.concat(action.list);
    }
    default:
      return state;
  }
}
