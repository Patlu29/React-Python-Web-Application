import { Navbar } from "./components/Navbar"
import { Container, HStack } from "@chakra-ui/react"



function App() {
  return (
    <HStack minH={"100vh"}>
      <Navbar />

      <Container maxW={"1200px"} my={4}></Container>
    </HStack>
  )
}

export default App
