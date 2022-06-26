import React from 'react';
import db from '../../db.json';
import { Avatar, Box, Heading,  } from '@chakra-ui/react';

function User() {
  return (
    <Box
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      margin="25px 0"
    >
      <Avatar
        size="2xl"
        mb="20px"
        mt="25px"
        name={db.fullName}
        // src={db.photo}
      />

      <Heading as="h1" size="lg" fontWeight="bold" fontFamily="mono" mb="1px">
        {db.fullName}
      </Heading>

      <Heading as="h2" size="md"  fontWeight="bold">
        {db.position}
      </Heading>
    </Box>
  );
}

export default User;
