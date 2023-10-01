import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MovieCard from '../component/MovieCard';

const mockMovie = {
  title: 'Movie Title',
  release_date: '2023-01-01',
  vote_average: 7.5,
  poster_path: '/movie-poster.jpg',
};

describe('MovieCard component', () => {
  it('renders movie card with correct data', () => {
    render(<MovieCard movie={mockMovie} onDetailsClick={() => {}} />);
    

    expect(screen.getByText('Movie Title')).toBeInTheDocument();
    expect(screen.getByText('2023-01-01')).toBeInTheDocument();
    expect(screen.getByText('Average Rating: 7.5')).toBeInTheDocument();
    

    const moviePoster = screen.getByAltText('Movie Title');
    expect(moviePoster).toBeInTheDocument();
  });

  it('calls the onDetailsClick function when "View Details" is clicked', () => {
    const onDetailsClickMock = jest.fn();
    render(<MovieCard movie={mockMovie} onDetailsClick={onDetailsClickMock} />);
    

    const viewDetailsButton = screen.getByRole('button', { name: 'View Details' });
    fireEvent.click(viewDetailsButton);


    expect(onDetailsClickMock).toHaveBeenCalledWith(mockMovie);
  });
});
