import { START_GET_SMURFS, GET_SMURFS_SUCCESS, GET_SMURFS_FAIL, SUBMIT_NEW_SMURF, SUBMIT_NEW_SMURF_SUCCESS, SUBMIT_NEW_SMURF_ERROR } from "../actions"

const initialState = {
  isFetching: false,
  smurfs: [],
  error: ''
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
    case GET_SMURFS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case SUBMIT_NEW_SMURF:
      return {
        ...state,
        isFetching: true,
      }
    case SUBMIT_NEW_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: ''
      }
    case SUBMIT_NEW_SMURF_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.Error
      }
    default:
      return state
  }
}