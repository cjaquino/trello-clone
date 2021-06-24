import axios from "axios";
import * as routes from "../constants/ApiRoutes";

// will need to figure out url stuff with waypoint
const baseURL = "http://localhost:5000";

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error("Error: ", errorResponse);
  }
}

function unwrapData(response) {
  return response.data;
}

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["Accept"] = "application/json";

const apiClient = {
  getBoard: function(id, callback) {
    return axios
      .get(`${baseURL}${routes.BOARDS_INDEX_URL}/${id}`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getBoards: function(callback) {
    return axios
      .get(`${baseURL}${routes.BOARDS_INDEX_URL}`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createBoard: function(board, callback) {
    return axios
      .post(`${baseURL}${routes.CREATE_BOARD_URL}`, {board})
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createList: function(title, boardId, callback) {
    return axios
      .post(`${baseURL}${routes.CREATE_LIST_URL}`, {
        boardId,
        list: {
          title,
        },
      })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  updateList: function(title, listId, callback) {
    return axios
      .put(`${baseURL}${routes.UPDATE_LIST_URL}/${listId}`, {
        title
      })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getCard: function(cardId, callback) {
    return axios
    .get(`${baseURL}${routes.GET_CARD_URL}/${cardId}`)
    .then(unwrapData)
    .then(callback)
    .catch(logError);
  },
  createCard: function(title, listId, callback) {
    return axios
    .post(`${baseURL}${routes.CREATE_CARD_URL}`, {
      listId,
      card: {
        title,
      }
    })
    .then(unwrapData)
    .then(callback)
    .catch(logError);
  }
};

export default apiClient;
