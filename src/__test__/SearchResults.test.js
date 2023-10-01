import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchResults from '../component/SearchResults';

const mockResults = [
  {
    id: 1,
    title: 'Movie 1',
    poster_path: '/poster1.jpg',
    release_date: '2023-01-01',
    vote_average: 7.5,
  },
  {
    id: 2,
    title: 'Movie 2',
    poster_path: '/poster2.jpg',
    release_date: '2023-02-15',
    vote_average: 8.0,
  },
];

describe('SearchResults component', () => {
  it('renders search results', () => {
    render(<SearchResults results={mockResults} />);
    
    const movieCards = screen.getAllByTestId('movie-card');
    expect(movieCards).toHaveLength(2);
    
    expect(screen.getByText('Movie 1')).toBeInTheDocument();
    expect(screen.getByText('Movie 2')).toBeInTheDocument();

    const viewDetailsButtons = screen.getAllByTestId('view-details-button');
    expect(viewDetailsButtons).toHaveLength(2);
  });

  it('opens the movie details modal when "View Details" is clicked', async () => {
    render(<SearchResults results={mockResults} />);
    const viewDetailsButton = screen.getAllByTestId('view-details-button')[0];
    fireEvent.click(viewDetailsButton);
    
    await waitFor(() => {
      expect(screen.getByText('Movie 1')).toBeInTheDocument();
      expect(screen.getByText('Release Date')).toBeInTheDocument();
      expect(screen.getByText('Average Rating')).toBeInTheDocument();
    });
    
    const closeModalButton = screen.getByRole('button', { name: 'Close' });
    fireEvent.click(closeModalButton);
    
    await waitFor(() => {
      expect(screen.queryByText('Movie 1')).not.toBeInTheDocument();
    });
  });

  it('displays an error message if there are no results', () => {
    render(<SearchResults results={[]} />);
    expect(screen.getByText('No results found.')).toBeInTheDocument();
  });
});
