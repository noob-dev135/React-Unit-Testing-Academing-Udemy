import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Hello from App.js" text', () => {
  // Arrange
  render(<App />);

  // Act
  // ...nothing

  // Assert
  const textElement = screen.getByText('Hello from App.js', { exact: false });
  expect(textElement).toBeInTheDocument();
});
