import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the current portfolio introduction', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /^useful things, only\.$/i })).toBeInTheDocument();
  expect(screen.getByText(/^Software, systems, and the occasional well-mannered machine\.$/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /^ayush here\.$/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/maybe a sentient being/i)).toBeInTheDocument();
  expect(screen.getByText(/craft niche solutions, automate the tedious/i)).toBeInTheDocument();
});
