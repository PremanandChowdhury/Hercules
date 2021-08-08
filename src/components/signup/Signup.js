import React, { useState } from 'react'
import './Signup.module.css'

const Signup = () => {
  const msg = (
    <span
      style={{
        color: '#505050',
        fontStyle: 'italic',
        fontSize: '1.5rem',
      }}>
      No Text in Input
    </span>
  )

  const [email, setEmail] = useState(msg)

  const updateInput = (e) => {
    setEmail(e.target.value)
  }

  return (
    <>
      <input type='text' name='email' id='email' onChange={updateInput} />
      <label data-testid='label'>{!email ? msg : email}</label>
    </>
  )
}

export default Signup
