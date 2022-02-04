import { Flex, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";
import React from "react";

const StyledFlexContainer = styled(Flex)`
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(252, 252, 252, 1) 100%
  );
  padding: 2em 3em;
  border-radius: 10px;
`;

function Card({ date, min, max, weather, icon }) {
  return (
    <StyledFlexContainer direction="column">
      <Text fontSize="l">{new Date(date * 1000).toDateString()}</Text>
      <Text fontSize="l">{weather.toUpperCase()}</Text>
      <Flex>
        <Text fontSize="l">Min: {min}º</Text>
        <Text fontSize="l">Max: {max}º</Text>
      </Flex>
      <Image
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather icon"
      />
    </StyledFlexContainer>
  );
}

export default Card;
