import axios from 'axios'

export const START_GET_SMURFS = 'START_GET_SMURFS'
export const GET_SMURFS = 'GET_SMURFS'

export const getSmurfs = () => dispatch => {
  dispatch({ type: START_GET_SMURFS })
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res)
    })
}