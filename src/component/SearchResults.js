import React, { useState } from 'react';
import { Box, Text, SimpleGrid } from '@chakra-ui/react';
import MovieCard from './MovieCard';
import MovieDetailsModal from './MovieDeatilsModal';

const SearchResults = ({ results }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };

  return (
    <Box p={4}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Search Results
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={2}>
          {results.map((movie) => (
             <MovieCard
              key={movie.id}
              movie={movie}
              onDetailsClick={openModal}
              maxH="250px"
            />
         ))}
        </SimpleGrid>

      <MovieDetailsModal isOpen={isModalOpen} onClose={closeModal} movie={selectedMovie} />
    </Box>
  );
};

export default SearchResults;
