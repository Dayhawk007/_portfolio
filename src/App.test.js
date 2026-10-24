import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the current portfolio introduction', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /hello, i'm aayush chandwani/i })).toBeInTheDocument();
  expect(screen.getByText(/AI-native, scalable full-stack systems/i)).toBeInTheDocument();
});
