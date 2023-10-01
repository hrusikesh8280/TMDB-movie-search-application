import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const Error = ({ message, onRetry }) => {
  return (
    <Box p={4} bg="red.500" color="white">
      <Text fontSize="xl" fontWeight="bold">
        Oops, an error occurred!
      </Text>
      <Text fontSize="lg">{message}</Text>
      {onRetry && (
        <Button
          mt={4}
          colorScheme="teal"
          size="sm"
          onClick={onRetry}
        >
          Retry
        </Button>
      )}
    </Box>
  );
};

export default Error;
