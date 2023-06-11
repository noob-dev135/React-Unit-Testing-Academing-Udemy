/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen } from '@testing-library/react';
import Posts from './Posts';

describe('Posts Component', () => {
  test('renders posts when page loads', async () => {
    
    // Prepare mock data
    const mockPosts = [
      { id: 1, title: 'Foo' }, 
      { id: 2, title: 'Bar' }, 
      { id: 3, title: 'Foobar' }, 
    ];
  
    // Mock fetch() API
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      // structure of "response" object
      json: async () => { return mockPosts; },
      status: 200
    });

    // Arrange
    render(<Posts />);
  
    // Act
    // ...nothing

    // Assert
    const postsElements = await screen.findAllByRole('listitem');
    expect(postsElements).not.toHaveLength(0);
  
  });
});