import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders "Hello World" text', () => {

  // Arrange
  render(<Greeting />);

  // Act
  // ...nothing

  // Assert
  const textElement = screen.getByText('Hello World', { exact: false });
  expect(textElement).toBeInTheDocument();

});