import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

const SmurfPage = () => {
  const params = useParams()
  const smurfs = useSelector(state => state.smurfs)
  return (
    <div>
      {smurfs.filter(s => s.id === parseInt(params.id)).map(s => (
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <h2 style={{ width: '200px', textAlign: 'left' }}>{s.name}</h2>
          <p style={{ width: '100px', textAlign: 'center' }}>Age: {s.age}</p>
          <p style={{ width: '200px', textAlign: 'center' }}>Height: {s.height}</p>
        </div >
      ))}
    </div>
  )
}

export default SmurfPage