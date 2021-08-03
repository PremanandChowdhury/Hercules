import { render, screen } from '@testing-library/react'
import Footer from '../components/footer/Footer'

describe('Test the Footer component', () => {
  it('Should render the footer component', () => {
    render(<Footer />)

    const footer = screen.getByTestId('footer')
    expect(footer).toBeInTheDocument()
  })
})
