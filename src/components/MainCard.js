import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

const StyledContainer = styled(Box)`
  width: 80%;
  height: 40%;
  margin: auto;
  padding: 2em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

function MainCard({ name, country, date, feels_like, temp, weather, icon }) {
  return (
    <StyledContainer>
      <Box>
        <Heading as='h2' size='2xl'>{name}</Heading>
        <Heading as='h4' size='l'>{new Date(date * 1000).toDateString()}</Heading>
        <Heading as='h4' size='l'>{weather.toUpperCase()}</Heading>
      </Box>
      <Box>
        <Heading as='h2' size='3xl'>{temp}º</Heading>
        <Heading as='h4' size='l'>Feels like: {feels_like}º</Heading>
      </Box>
      <Image
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather icon"
        boxSize='200px'
      />
    </StyledContainer>
  );
}

export default MainCard;
