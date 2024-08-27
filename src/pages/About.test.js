
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './About';


const renderWithRouter = (ui) => {
  return render(<Router>{ui}</Router>);
};

test('renders About page with buttons', () => {
  renderWithRouter(<About />);

  
  expect(screen.getByText(/About Page/i)).toBeInTheDocument();

  
  expect(screen.getByText(/About Company/i)).toBeInTheDocument();
  expect(screen.getByText(/About Teams/i)).toBeInTheDocument();
});

test('buttons have correct links', () => {
  renderWithRouter(<About />);

  expect(screen.getByText(/About Company/i).closest('a')).toHaveAttribute('href', '/about/aboutcompany');
  
  expect(screen.getByText(/About Teams/i).closest('a')).toHaveAttribute('href', '/about/aboutteam');
});
