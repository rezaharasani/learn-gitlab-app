import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('an always true assertion', () => {
  it('should be equal to 2', () => {
    expect(1+1).toEqual(2)
  })
})

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)
    const textElement = screen.getByText(/Learn GitLab/i);
    expect(textElement).toBeInTheDocument();

    //screen.debug(); // prints out the jsx in the App component unto the command line
  })

  it('shows the GitLab logo', () => {
    render(<App />)
    const logo = screen.getByAltText('GitLab logo');
    expect(logo).toBeInTheDocument();
  })
})