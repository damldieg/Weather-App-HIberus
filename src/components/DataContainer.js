import { Box, Divider, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import { useStore } from "../store/store";
import Card from "./Card";
import MainCard from "./MainCard";
import Searchbar from "./Searchbar";


const StyledBox = styled(Box)`
  width: 90%;
  height: 80%;
  background-color: transparent;
  backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 2px solid white;
  padding: 2em;
`

const StyledGrid = styled(Grid)`
  align-items: center;
  margin-top: 3em;

`

function DataContainer() {
  const { globalState } = useStore();
  const { data } = globalState;

  return (
    <StyledBox>
    <Searchbar />
      {data.name && (
        <>
          <MainCard
            name={data?.name}
            country={data?.country}
            date={data?.current.date}
            feels_like={data?.current.feels_like}
            temp={data?.current.temp}
            weather={data?.current.weather_description}
            icon={data?.current.weather_icon}
          />
          <Divider orientation='horizontal' />
          <StyledGrid templateColumns='repeat(7, 1fr)' gap={4}>
            {data.daily.map((day, index) => {

              return (
                <GridItem key={index}>
                  <Card
                    date={day.date}
                    min={day.min_temp}
                    max={day.max_temp}
                    weather={day.weather_description}
                    icon={day.weather_icon}
                  />
                </GridItem>
              );
            })}
          </StyledGrid>
        </>
      )}
    </StyledBox>
  );
}

export default DataContainer;
