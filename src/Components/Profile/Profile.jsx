import React from 'react';
import AboutUser from './AboutUser';
import User from './User';
import { Container, Flex,  } from '@chakra-ui/react';

function Profile() {
  return (
    <Container
      display="flex"
      p={0}
      maxW="container.lg"
      justifyContent="center"
    
    >
      <Flex  flexDirection="column" alignItems="center">
        <User />
        <AboutUser />
        
      </Flex>
    </Container>
  );
}

export default Profile;
