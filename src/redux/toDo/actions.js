import {
  ADD_TO_DO_LIST,
  UPDATE_TO_DO_LIST,
  DELETE_TO_DO_LIST
} from './const'

export const addToList = (data) => ({
  type: ADD_TO_DO_LIST,
  payload: data
});
export const updateToList = (data) => ({
  type: UPDATE_TO_DO_LIST,
  payload: data
});
export const deleteToList = (data) => ({
  type: DELETE_TO_DO_LIST,
  payload: data
})

