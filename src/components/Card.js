import React from "react";
import PropTypes from 'prop-types'
import { Flex, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";

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
      <Text fontSize="m" mt="2">{weather}</Text>
      <Flex justify="space-between" align="center" mt="2">
        <Text fontSize="l">Min</Text>
        <Text fontSize="l">Max</Text>
      </Flex>
      <Flex justify="space-between" align="center" mt="2">
        <Text fontSize="xl">{min}º</Text>
        <Text fontSize="xl">{max}º</Text>
      </Flex>
      <Image
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather icon"
      />
    </StyledFlexContainer>
  );
}

Card.propTypes = {
  date: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  weather: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}


export default Card;
