import React, { useState } from 'react'
import './CountDown.css'

const CountDown = () => {
  const [day, setDay] = useState('')
  const [hr, setHr] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')
  const [msg, setMsg] = useState('')

  let result =
    Number(day) * 86400 + Number(hr) * 3600 + Number(min) * 60 + Number(sec)

  let timer = {
    day,
    hr,
    min,
    sec,
  }
  let intervalId = null

  const startCountDown = () => {
    intervalId = setInterval(() => {
      if (
        timer.day === '' &&
        timer.hr === '' &&
        timer.min === '' &&
        timer.sec === ''
      ) {
        clearInterval(intervalId)
        return
      }
      if (timer.hr <= 0 && timer.min <= 0 && timer.sec <= 0) {
        // Day
        timer.hr += 24
        timer.min += 59
        timer.sec += 59
        setHr(timer.hr)
        setMin(timer.min)
        setSec(timer.sec)

        if (timer.day > 0) {
          timer.day -= 1
          setDay(timer.day)
          console.log('day:', timer.day)
        }

        if (timer.hr > 0) {
          timer.hr -= 1
          setHr(timer.hr)
          console.log('hr:', timer.hr)
        }

        console.log('Min:', timer.min, '\n sec:', timer.sec)
      }

      if (timer.min <= 0 && timer.sec <= 0) {
        // Hours
        timer.min += 59
        timer.sec += 59
        setMin(timer.min)
        setSec(timer.sec)

        if (timer.hr > 0) {
          timer.hr -= 1
          setHr(timer.hr)
          console.log('hr:', timer.hr)
        }

        console.log('Min:', timer.min, '\n sec:', timer.sec)
      }

      if (timer.min > 0 && timer.sec === 0) {
        // Minutes
        timer.min -= 1
        setMin(timer.min)
        timer.sec += 59
        setSec(timer.sec)
      }

      if (timer.sec >= 0) {
        // Seconds
        timer.sec -= 1
        if (timer.sec <= 0) {
          timer.sec = 0
        }
        setSec(timer.sec)
      }

      if (timer.day < 0 && timer.hr < 0 && timer.min < 0 && timer.sec < 0) {
        clearInterval(intervalId)
        setMsg('Times Up!')
      }
    }, 5)
  }

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
            placeholder='0'
            onChange={inputHandler}
          />
          <label htmlFor='day'>day</label>
        </div>
        <span> : </span>
        <div>
          <input
            type='number'
            name='hr'
            id='hr'
            value={hr}
            placeholder='0'
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
            placeholder='0'
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
            placeholder='0'
            onChange={inputHandler}
          />
          <label htmlFor='sec'>sec</label>
        </div>
      </form>
      <div className='result' data-testid='result'>
        {result}
      </div>
      <button onClick={startCountDown}>Start</button>
      <br />
      <h2>{msg}</h2>
    </>
  )
}

export default CountDown
