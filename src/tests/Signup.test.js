import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import Signup from '../components/signup/Signup'

describe('Test the Signup UI component', () => {
  beforeEach(() => render(<Signup />))
  afterEach(() => cleanup)

  it('Should have an input Element', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('Should have a label', () => {
    expect(screen.getByTestId('label')).toBeInTheDocument()
  })
})

describe('Test the label', () => {
  beforeEach(() => render(<Signup />))
  afterEach(() => cleanup)

  it('Should update the text entered in input', () => {
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'test Input' },
    })

    expect(screen.getByTestId('label')).toHaveTextContent('test Input')
  })
})
