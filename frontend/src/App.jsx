import React from 'react';
import { Stack, Container, Text } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import UserGrid from './components/UserGrid';

function App() {
  return (
    <Stack minH={"100vh"}>
      <Navbar />
      <Container maxW={"1200px"} my={4}>
        <Text fontWeight={"bold"} letterSpacing={"2px"} 
        textTransform={"uppercase"} textAlign={"center"} 
        mb={8} fontSize={{base:"3xl", md:"50"}}>
          <Text as={"span"} color={"blue"}>
            My Friend's
          </Text>
          {" "}🚀
        </Text>
        <UserGrid />
      </Container>
    </Stack>
  );
}

export default App;