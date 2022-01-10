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
    if (timer.day || timer.hr || timer.min || timer.sec) {
      intervalId = setInterval(() => {
        setMsg('')
        if (timer.sec <= 0) {
          if (timer.min <= 0) {
            if (timer.hr <= 0) {
              if (timer.day <= 0) {
                reset()
              } else {
                setDay((timer.day -= 1))
                setHr((timer.hr += 23))
                setMin((timer.min += 59))
                setSec((timer.sec += 59))
              }
            } else {
              setHr((timer.hr -= 1))
              setMin((timer.min += 59))
              setSec((timer.sec += 59))
            }
          } else {
            setMin((timer.min -= 1))
            setSec((timer.sec += 59))
          }
        } else {
          setSec((timer.sec -= 1))
        }

        if (
          timer.day === 0 &&
          timer.hr === 0 &&
          timer.min === 0 &&
          timer.sec === 0
        ) {
          clearInterval(intervalId)
          setMsg('Times Up!')
        }
      }, 1000)
    } else {
      setMsg('Kuch Number to daal re baba!!')
    }
  }

  const reset = () => {
    clearInterval(intervalId)
    setMsg('Times Up!')
  }

  const inputHandler = (e) => {
    const id = e.target.id
    const inputVal = e.target.value

    if (id === 'day' && inputVal < 365 && inputVal >= 0) {
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
        {result} seconds left
      </div>
      <button class='btn' onClick={startCountDown}>
        Start
      </button>
      <br />
      <h2>{msg}</h2>
    </>
  )
}

export default CountDown
