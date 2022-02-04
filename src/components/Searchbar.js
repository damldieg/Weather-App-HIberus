import { Button, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import styled from "styled-components";
import { getData } from "../services/getData";
import { useStore } from "../store/store";


const StyledFlex = styled(Flex)`
  width: 30%;
  padding-left: .5em;
  margin: auto;
  border: 1px solid white;
  border-radius: 10px;
`

const StyledButton = styled(Button)`
  background-color: transparent;

`

function Searchbar() {
  const [city, setCity] = useState({ city: "" });
  const [loading, setLoading] = useState(false);
  const {miFuncion} = useStore();

  const handleOnChange = (e) => {
    e.preventDefault();
    setCity((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleSearch = async () => {
    setLoading(true);
    const data = await getData(city.city);
    setCity({ city: "" });
    setLoading(false);
    miFuncion(data);
  };

  return (
    <StyledFlex>
      <Input
        isRequired={true}
        variant='unstyled'
        focusBorderColor='white'
        placeholder="City..."
        name="city"
        value={city.city}
        onChange={handleOnChange}
      />
      <StyledButton variant='ghost' isLoading={loading} isDisabled={city.name === "" ? true : false} onClick={handleSearch}>Search</StyledButton>
    </StyledFlex>
  );
}

export default Searchbar;
