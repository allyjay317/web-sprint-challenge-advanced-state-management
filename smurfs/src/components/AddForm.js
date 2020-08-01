import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitNewSmurf } from '../redux/actions'
import { useHistory } from 'react-router'

const AddForm = () => {

  const [newSmurf, setNewSmurf] = useState({ name: '', age: 0, height: '0cm' })
  const [submitted, setSubmitted] = useState(false)

  const dispatch = useDispatch()

  const handleChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(submitNewSmurf({ ...newSmurf }))
    setNewSmurf({ name: '', age: 0, height: '0cm' })
    setSubmitted(true)
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
      <div>
        {submitted ? <SubmitMessage /> : <div></div>}
      </div>
    </div>
  )
}

const SubmitMessage = () => {

  const error = useSelector(state => state.error)
  return (
    <div>
      {error === '' ? <div>Success</div> : <div>{error}</div>}
    </div>
  )
}

export default AddForm