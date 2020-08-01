import React from 'react'
import { useSelector } from 'react-redux'
import Smurf from "./Smurf";
const SmurfCollector = () => {
  const smurfs = useSelector(state => state.smurfs)
  const isFetching = useSelector(state => state.isFetching)
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
              <Smurf data={smurf} key={smurf.id} />
            ))}
          </div>
        )
      }
    </div>
  )
}

export default SmurfCollector