import './App.css'
import CountDown from './components/countDown/CountDown'
// import CountDown2 from './components/countDown2/CountDown2'
// import CountDown3 from './components/Countdown3'
import Footer from './components/footer/Footer'

const App = () => {
  // const hoursMinSecs = { hours: 0, minutes: 0, seconds: 5 }

  return (
    <div className='container'>
      <CountDown />
      {/* <CountDown2 hoursMinSecs={hoursMinSecs} /> */}
      {/* <CountDown3 /> */}
      <Footer />
    </div>
  )
}

export default App
