import  { Container, Box, Flex, Text } from '@chakra-ui/react';
import { PureComponent } from 'react';

export class Navbar extends PureComponent {
  render() {
    return (
      <Container maxW={"900px"}>
        <Box
        px={4}
        my={4}
        borderRadius={5}
        bg={'whiteAlpha.500'}
        >

            <Flex
            h="16"
            alignItems={"center"}
            justifyContent={'space-between'}
            >

                {/* Left side */}
                <Flex
                alignItems={"center"}
                justifyContent={"center"}
                gap={3}
                display={{base:"none", sm:"flex"}}
                >
                    <img src="./react.png" alt="react-logo" width={50} height={50} />
                    <Text fontSize={"40px"}>+</Text>
                    <img src="./python.png" alt="python-logo" width={50} height={40} />
                    <Text fontSize={"40px"}>=</Text>
                    <img src="./explode.png" alt="explode head" width={45} height={45} />
                </Flex>
                {/* Right side */}
                <Flex></Flex>

            </Flex>
        </Box>
      </Container>
    )
  }
}

export default Navbar