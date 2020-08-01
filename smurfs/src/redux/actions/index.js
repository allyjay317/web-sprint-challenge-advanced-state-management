import axios from 'axios'

export const START_GET_SMURFS = 'START_GET_SMURFS'
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS'
export const GET_SMURFS_FAIL = 'GET_SMURFS_FAIL'

export const getSmurfs = () => dispatch => {
  dispatch({ type: START_GET_SMURFS })
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data)
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data })
    })
}