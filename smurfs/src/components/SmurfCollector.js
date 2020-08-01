import React from 'react'
import { useSelector } from 'react-redux'
import Smurf from "./Smurf";
import { useHistory } from 'react-router';
const SmurfCollector = () => {
  const smurfs = useSelector(state => state.smurfs)
  const isFetching = useSelector(state => state.isFetching)
  const history = useHistory()
  return (
    <div>
      {isFetching ?
        (
          <div>
            Loading
          </div>
        ) : (
          <div>
            {smurfs.map(smurf => (
              <div onClick={() => history.push(`/smurf/${smurf.id}`)}><Smurf data={smurf} key={smurf.id} /></div>
            ))}
          </div>
        )
      }
    </div>
  )
}

export default SmurfCollector