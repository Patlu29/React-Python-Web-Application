import { Navbar } from "./components/Navbar"
import { Container, Stack } from "@chakra-ui/react"




function App() {
  return (
    <Stack minH={"100vh"}>
      <Navbar />

      <Container maxW={"1200px"} my={4}></Container>
    </Stack>
  )
}

export default App
