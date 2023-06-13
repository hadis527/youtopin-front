import { ADD_TO_DO_LIST } from './const'

export const addToList = (data) => ({
  type: ADD_TO_DO_LIST,
  payload: data
})
