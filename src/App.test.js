import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the financial form', () => {
  render(<App />);
  expect(screen.getByText(/Market Price pre Share/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
});


