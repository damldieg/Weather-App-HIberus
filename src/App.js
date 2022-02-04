import { Box } from "@chakra-ui/react";
import styled from "styled-components";
import DataContainer from "./components/DataContainer";

const StyledContainer = styled(Box)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  background-image: url("https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  color: #363636;
`;

function App() {
  return (
    <StyledContainer>
      <DataContainer />
    </StyledContainer>
  );
}

export default App;
