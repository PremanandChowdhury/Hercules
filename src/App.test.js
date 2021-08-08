import { cleanup, render } from '@testing-library/react'
import App from './App'

describe('Test the App component', () => {
  it('should render App Component', () => {
    render(<App />)
    cleanup()
  })
})
