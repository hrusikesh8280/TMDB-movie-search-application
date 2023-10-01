import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MovieDetailsModal from '../component/MovieDeatilsModal';

const mockMovie = {
  title: 'Movie Title',
  overview: 'Movie Overview',
  release_date: '2023-01-01',
  vote_average: 7.5,
  poster_path: '/movie-poster.jpg',
  trailerKey: 'abc123',
};

describe('MovieDetailsModal component', () => {
  it('renders movie details in the modal', () => {
    render(<MovieDetailsModal isOpen={true} onClose={() => {}} movie={mockMovie} />);
    

    expect(screen.getByText('Movie Title')).toBeInTheDocument();
    expect(screen.getByText('Movie Overview')).toBeInTheDocument();
    expect(screen.getByText('Release Date')).toBeInTheDocument();
    expect(screen.getByText('Average Rating')).toBeInTheDocument();
    
    const trailerLink = screen.getByRole('link', { name: 'Watch Trailer' });
    expect(trailerLink).toBeInTheDocument();
    expect(trailerLink.href).toBe('https://www.youtube.com/watch?v=abc123');
    

    const moviePoster = screen.getByAltText('Movie Title');
    expect(moviePoster).toBeInTheDocument();
  });

  it('does not render when movie is null', () => {
    render(<MovieDetailsModal isOpen={true} onClose={() => {}} movie={null} />);
    

    expect(screen.queryByText('Movie Title')).not.toBeInTheDocument();
  });

  it('calls the onClose function when the modal is closed', () => {
    const onCloseMock = jest.fn();
    render(<MovieDetailsModal isOpen={true} onClose={onCloseMock} movie={mockMovie} />);
    

    const closeButton = screen.getByRole('button', { name: 'Close' });
    fireEvent.click(closeButton);

 
    expect(onCloseMock).toHaveBeenCalled();
  });
});
