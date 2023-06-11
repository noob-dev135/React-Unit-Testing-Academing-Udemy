/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting Component', () => {
  test('renders "Hello World" text', () => {

    // Arrange
    render(<Greeting />);
  
    // Act
    // ...nothing
  
    // Assert
    const textElement = screen.getByText('Hello World', { exact: false });
    expect(textElement).toBeInTheDocument();
  
  });

  test('renders "good to see you" when button is not clicked', () => {

    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing

    // Assert
    const textElement = screen.getByText('good to see you', { exact: false });
    expect(textElement).toBeInTheDocument();

  });

  test('renders "Text Changed!" text when button is clicked', () => {

    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByText('Change text');
    act(() => {
      userEvent.click(buttonElement);
    });

    // Assert
    const textElement = screen.getByText('Text Changed!');
    expect(textElement).toBeInTheDocument();

  });

  test('does not render "good to see you" text when button is clicked', () => {

    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByText('Change text');
    act(() => {
      userEvent.click(buttonElement);
    });

    // Assert
    const textElement = screen.queryByText('good to see you', { exact: false });
    expect(textElement).toBeNull();

  });
});