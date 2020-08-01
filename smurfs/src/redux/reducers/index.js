import { START_GET_SMURFS, GET_SMURFS_SUCCESS } from "../actions"

const initialState = {
  isFetching: false,
  smurfs: []
}

export const SmurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GET_SMURFS:
      return {
        ...state,
        isFetching: true
      }
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload
      }
    default:
      return state
  }
}