import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello word', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello word/i);
  expect(linkElement).toBeInTheDocument();
});
