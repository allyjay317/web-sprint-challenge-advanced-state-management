import axios from 'axios'

export const START_GET_SMURFS = 'START_GET_SMURFS'
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS'
export const GET_SMURFS_FAIL = 'GET_SMURFS_FAIL'

export const SUBMIT_NEW_SMURF = 'SUBMIT_NEW_SMURF'
export const SUBMIT_NEW_SMURF_SUCCESS = 'SUBMIT_NEW_SMURF'
export const SUBMIT_NEW_SMURF_ERROR = 'SUBMIT_NEW_SMURF'

export const getSmurfs = () => dispatch => {
  dispatch({ type: START_GET_SMURFS })
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data)
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data })
    })
}

export const submitNewSmurf = newSmurf => dispatch => {
  debugger
  dispatch({ type: SUBMIT_NEW_SMURF })
  axios.post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err.response.data)
    })
}