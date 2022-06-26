import Profile from '../src/Components/Profile/Profile';
import { Container, useColorModeValue, Box } from '@chakra-ui/react';
import ButtonModeColor from './Components/ButtonModeColor';

function App() {
  const bgColor = useColorModeValue('#dedede', '#051026');

  return (
    <Container className="App" maxW="container." h="100%" bgColor={bgColor}>
      <Container
        display="flex"
        flexDirection="column"
        maxW="container.lg"
        p={0}
        h="100vh"
        // className="App"
        // justifyContent="center"
        // bgColor={bgColor}
        // color={color}
      >
        <Box
          justifyContent="flex-end"
          mt="10px"
          mr={{ base: '-10px', lg: '70px' }}
          ml="auto"
        >
          <ButtonModeColor />
        </Box>
        <Profile />
      </Container>
    </Container>
  );
}

export default App;
