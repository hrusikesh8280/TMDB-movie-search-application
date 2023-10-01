import React from 'react';
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Badge,
  Image,
  Link,
  Stack,
} from '@chakra-ui/react';

const MovieDetailsModal = ({ isOpen, onClose, movie }) => {
  if (!movie) {
    return null;
  }

  const trailerLink = `https://www.youtube.com/watch?v=${movie.trailerKey}`;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center" fontSize="2xl">
          {movie.title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={8}>
            <Box flex="1" align="center">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                maxH="400px"
              />
            </Box>
            <Box flex="2" textAlign="left">
              <Text fontSize="lg" fontWeight="bold">
                Overview
              </Text>
              <Text fontSize="md">{movie.overview}</Text>
              <Text fontSize="lg" fontWeight="bold" mt={4}>
                Release Date
              </Text>
              <Badge colorScheme="teal">{movie.release_date}</Badge>
              <Text fontSize="lg" fontWeight="bold" mt={4}>
                Average Rating
              </Text>
              <Badge colorScheme="green">{movie.vote_average}</Badge>
              <Text fontSize="lg" fontWeight="bold" mt={4}>
                Trailer
              </Text>
              <Link
                href={trailerLink}
                target="_blank"
                rel="noopener noreferrer"
                color="teal.500"
              >
                Watch Trailer
              </Link>
            </Box>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MovieDetailsModal;
