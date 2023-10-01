import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../component/SearchBar';

test('renders the search bar', () => {
  const { getByPlaceholderText } = render(<SearchBar />);
  const searchBar = getByPlaceholderText('Search for movies');
  expect(searchBar).toBeInTheDocument();
});

test('calls the onSearch function when a query is entered', () => {
  const mockOnSearch = jest.fn();
  const { getByPlaceholderText } = render(<SearchBar onSearch={mockOnSearch} />);
  const searchBar = getByPlaceholderText('Search for movies');
  
  fireEvent.change(searchBar, { target: { value: 'Harry Potter' } });
  fireEvent.keyPress(searchBar, { key: 'Enter', code: 13 });

  expect(mockOnSearch).toHaveBeenCalledWith('Harry Potter');
});
