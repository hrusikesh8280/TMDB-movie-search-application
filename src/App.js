import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import SearchBar from './component/SearchBar';
import SearchResults from './component/SearchResults';
import Error from './component/Error';
import { searchMovies } from './api/tmdb';

function App() {
  const [searchResults, setSearchResults] = React.useState([]);
  const [error, setError] = React.useState(null);
  const handleSearch = async (query) => {
    try {
      setError(null);

      if (query) {
        const results = await searchMovies(query);

        if (results.length === 0) {
          setError('No results found.');
        }

        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    } catch (err) {
      setError('An error occurred while searching for movies.');
      setSearchResults([]);
    }
  }



  return (
    <div className="App">
      <Box p={4} bg="teal.500" color="white">
        <Container maxW="container.lg">
          <h1>Movie Search App</h1>
          <SearchBar onSearch={handleSearch} />
          {error && <Error message={error} />}
          <SearchResults results={searchResults} />
        </Container>
      </Box>
    </div>
  );
}

export default App;
