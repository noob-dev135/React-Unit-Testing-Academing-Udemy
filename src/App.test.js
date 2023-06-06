import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Hello from App.js" text', () => {
  render(<App />);
  const textElement = screen.getByText('Hello from App.js', { exact: false });
  expect(textElement).toBeInTheDocument();
});
