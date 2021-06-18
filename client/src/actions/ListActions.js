import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list };
}

export function createList(title, boardId, callback) {
  return function(dispatch) {
    apiClient.createList(title, boardId, data => {
      dispatch(createListSuccess(data));

      if (callback) {
        callback(data);
      }
    });
  };
}