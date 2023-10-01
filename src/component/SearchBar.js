import React, { useState } from 'react';
import { Input, IconButton, Box, Stack } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Box p={4} bg="gray.200">
      <Stack direction="row" spacing={2} align="center">
        <Input
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          size="lg"
          variant="filled"
          style={{
            color: 'black',
            backgroundColor: 'lightgray'
          }}
        />
        <IconButton
          colorScheme="teal"
          aria-label="Search"
          icon={<SearchIcon />}
          onClick={handleSearch}
          size="lg"
        />
      </Stack>
    </Box>
  );
};

export default SearchBar;
