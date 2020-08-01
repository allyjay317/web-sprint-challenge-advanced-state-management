import React from 'react'

const Smurf = (props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <h2 style={{ width: '200px', textAlign: 'left' }}>{props.data.name}</h2>
      <p style={{ width: '100px', textAlign: 'center' }}>{props.data.age}</p>
      <p style={{ width: '200px', textAlign: 'center' }}>{props.data.height}</p>
    </div >
  )
}

export default Smurf