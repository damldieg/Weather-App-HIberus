import { Container, Heading } from "@chakra-ui/react";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <Container>
      <Heading padding="4">HIBERUS WEATHER APP</Heading>
      <Searchbar />
    </Container>
  );
}

export default App;
