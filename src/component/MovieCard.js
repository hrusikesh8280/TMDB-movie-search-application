import React from 'react';
import { Box, Text, Image, Button, Badge } from '@chakra-ui/react';

const MovieCard = ({ movie, onDetailsClick }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      textAlign="center"
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.02)' }}
      height="100%" 
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        width="100%"
        flex="1" // Allow the image to expand within the card
      />
      <Box p={4}>
        <Text fontSize="lg" fontWeight="bold">
          {movie.title}
        </Text>
        <Badge colorScheme="teal">{movie.release_date}</Badge>
        <Text fontSize="sm" mt={2}>
          Average Rating: {movie.vote_average}
        </Text>
      </Box>
      <Button
        colorScheme="teal"
        size="lg"
        onClick={() => onDetailsClick(movie)}
      >
        View Details
      </Button>
    </Box>
  );
};

export default MovieCard;
