import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { submitNewSmurf } from '../redux/actions'
import { useHistory } from 'react-router'

const AddForm = () => {

  const [newSmurf, setNewSmurf] = useState({ name: '', age: 0, height: '0cm' })

  const dispatch = useDispatch()
  const history = useHistory()

  const handleChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(submitNewSmurf({ ...newSmurf }))
    setNewSmurf({ name: '', age: 0, height: '0cm' })
    history.push('/')
  }

  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit}
      >
        <label htmlFor='name'>
          Name:
          <input name='name' id='name' type='text' value={newSmurf.name} onChange={handleChange} />
        </label>
        <label htmlFor='age'>
          Age:
          <input name='age' id='age' type='text' value={newSmurf.age} onChange={handleChange} />
        </label>
        <label htmlFor='height'>
          Height:
          <input name='height' id='height' type='text' value={newSmurf.height} onChange={handleChange} />
        </label>
        <button onClick={handleSubmit}>Add!</button>
      </form>
    </div>
  )
}

export default AddForm