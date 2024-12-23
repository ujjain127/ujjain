import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app header', () => {
  render(<App />);
  const headerElement = screen.getByText(/my app/i);
  expect(headerElement).toBeInTheDocument();
});
