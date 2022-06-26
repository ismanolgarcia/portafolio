import React from 'react';
import { SimpleGrid, Box, Heading } from '@chakra-ui/react';
function Projects() {
  return (
    <Box mt="100px" >
      <Heading as="h2" textAlign="center" margin="10px">
        Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacingX="20px" spacingY="20px" m={{base: "8px", md : " 0 100px" }}>
        <Box bg="tomato" height="250px"></Box>
        <Box bg="tomato" height="250px"></Box>
        <Box bg="tomato" height="250px"></Box>
        <Box bg="tomato" height="250px"></Box>
      </SimpleGrid>
    </Box>
  );
}

export default Projects;
