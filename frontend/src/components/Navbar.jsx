import { Box, Container, Flex, Text } from "@chakra-ui/react"
import { ColorModeButton } from "./ui/color-mode"
import CreateUserModal from "./CreateUserModal"


const Navbar = () => {
    
return (
    <Container maxW={"900px"}>
        <Box px={4} my={4} borderRadius={20} border="2px solid rgb(0, 128, 128)" >
            <Flex h={"16"} alignItems={"center"} justifyContent={"space-between"} borderRadius={"20px"} >
                {/* for left */}
                <Flex alignItems={"center"} justifyContent={"center"} gap={3} display={{base:"none", md:"flex"}}>
                    <img src="/react.png" alt="React logo" width={50} height={50}/>
                    <Text fontSize={{ base: "20px", md: "50px" }}>+</Text>
                    <img src="/python.png" alt="Python logo" width={50} height={40}/>
                    <Text fontSize={{ base: "20px", md: "50px" }}>=</Text>
                    <img src="./explode.png" alt="Explode head" width={45} height={45}/>
                </Flex>
                {/* for right */}
                <Flex gap={3} alignItems={"center"} ml="auto">
                    <Text fontSize={{ base: "md", md: "lg" }} fontWeight={500}>
                        BFFship ✨
                    </Text>
                    <ColorModeButton borderRadius={50} border="2px solid rgb(0, 128, 128)"/>
                    <CreateUserModal />
                </Flex>
            </Flex>
        </Box>
    </Container>
)
}

export default Navbar