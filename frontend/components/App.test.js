// // Write your tests here
// test('sanity', () => {
//   expect(true).toBe(false)
// })

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppFunctional from './AppFunctional';

test('renders the visible texts in headings, buttons, links...', () => {
  render(<AppFunctional />);
  
  expect(screen.getByText(/Coordinates/i)).toBeInTheDocument();
  expect(screen.getByText(/You moved/i)).toBeInTheDocument();
  expect(screen.getByText(/LEFT/i)).toBeInTheDocument();
  expect(screen.getByText(/UP/i)).toBeInTheDocument();
  expect(screen.getByText(/RIGHT/i)).toBeInTheDocument();
  expect(screen.getByText(/DOWN/i)).toBeInTheDocument();
  expect(screen.getByText(/reset/i)).toBeInTheDocument();
});

test('typing on the input results in its value changing to the entered text', () => {
  render(<AppFunctional />);
  
  const input = screen.getByPlaceholderText(/type email/i);
  fireEvent.change(input, { target: { value: 'test@example.com' } });
  
  expect(input.value).toBe('test@example.com');
});

test('clicking the LEFT button updates the coordinates and steps', () => {
  render(<AppFunctional />);
  
  const leftButton = screen.getByText(/LEFT/i);
  fireEvent.click(leftButton);
  
  expect(screen.getByText(/Coordinates \(1, 2\)/i)).toBeInTheDocument();
  expect(screen.getByText(/You moved 1 time/i)).toBeInTheDocument();
});

test('clicking the UP button updates the coordinates and steps', () => {
  render(<AppFunctional />);
  
  const upButton = screen.getByText(/UP/i);
  fireEvent.click(upButton);
  
  expect(screen.getByText(/Coordinates \(2, 1\)/i)).toBeInTheDocument();
  expect(screen.getByText(/You moved 1 time/i)).toBeInTheDocument();
});

test('clicking the reset button resets the coordinates, steps, and message', () => {
  render(<AppFunctional />);
  
  const leftButton = screen.getByText(/LEFT/i);
  fireEvent.click(leftButton);
  
  const resetButton = screen.getByText(/reset/i);
  fireEvent.click(resetButton);
  
  expect(screen.getByText(/Coordinates \(2, 2\)/i)).toBeInTheDocument();
  expect(screen.getByText(/You moved 0 times/i)).toBeInTheDocument();
  expect(screen.getByText(/Coordinates/i)).toBeInTheDocument();
});
