import React, { useState } from 'react'
import './CountDown.css'

const CountDown = () => {
  const [day, setDay] = useState('')
  const [hr, setHr] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')

  let result =
    Number(day) * 86400 + Number(hr) * 3600 + Number(min) * 60 + Number(sec)

  const inputHandler = (e) => {
    const id = e.target.id
    const inputVal = e.target.value

    if (id === 'day') {
      setDay(inputVal)
    } else if (id === 'hr' && inputVal < 24 && inputVal >= 0) {
      setHr(inputVal)
    } else if (id === 'min' && inputVal < 60 && inputVal >= 0) {
      setMin(inputVal)
    } else if (id === 'sec' && inputVal < 60 && inputVal >= 0) {
      setSec(inputVal)
    }
  }

  return (
    <>
      <form>
        <div>
          <input
            type='number'
            id='day'
            value={day}
            placeholder='00'
            onChange={inputHandler}
          />
          <label htmlFor='day'>days</label>
        </div>
        <span> : </span>
        <div>
          <input
            type='number'
            name='hr'
            id='hr'
            value={hr}
            placeholder='00'
            onChange={inputHandler}
          />
          <label htmlFor='hr'>hr</label>
        </div>
        <span> : </span>
        <div>
          <input
            type='number'
            name='min'
            id='min'
            value={min}
            placeholder='00'
            onChange={inputHandler}
          />
          <label htmlFor='min'>min</label>
        </div>
        <span> : </span>
        <div>
          <input
            type='number'
            name='sec'
            id='sec'
            value={sec}
            placeholder='00'
            onChange={inputHandler}
          />
          <label htmlFor='sec'>sec</label>
        </div>
      </form>
      <div className='result' data-testid='result'>
        {result}
      </div>
    </>
  )
}

export default CountDown
