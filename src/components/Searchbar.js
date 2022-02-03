import { Button, Flex, Input} from "@chakra-ui/react";
import React, { useState } from "react";
import { getData } from "../services/getData";
import { searchCity } from "../store/reducer";
import { useStore } from "../store/store";

function Searchbar() {
  const [city, setCity] = useState({ city: "" });
  const [, dispatch] = useStore()

  const handleOnChange = (e) => {
    e.preventDefault();
    setCity((state) => ({...state, [e.target.name]: e.target.value}))
  };

  const handleSearch = async () => {
    const data = await getData(city.city);
    setCity({city: ''});
    console.log(data)
    dispatch(searchCity(data));
  };

  return (
    <Flex>
      <Input placeholder="City..." name='city' value={city.city} onChange={handleOnChange}/>
      <Button onClick={handleSearch}>Search</Button>
    </Flex>
  );
}

export default Searchbar;
