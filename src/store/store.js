import React from "react";

export const SEARCH_CITY = "SEARCH_CITY";

//Crea y exporta el initialState con un array de reservas vacias

export const initialState = {
  data: {},
};
//Crea la accion para agregar una nueva reserva
export const searchCity = (city) => ({
  type: SEARCH_CITY,
  city,
});

//Crea el reducer
export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SEARCH_CITY":
      return {
        ...state,
        data: payload.city,
      };
    default:
      return state;
  }
};

//Guarda en una variable el contexto creado
const Store = React.createContext();
Store.displayName = "Store";

//Crea y exporta un custom hook usando el contexto anteriormente creado
//export const useStore = () => React.useContext(Store);

export const useStore = () => {
  const { globalState, miFuncion } = React.useContext(Store);

  return { globalState, miFuncion };
};

//Crea y exporta el provider
export const StoreProvider = ({ children, initialState }) => {
  // Crea un estado global usando el reducer y el initialState
  const [globalState, dispatch] = React.useReducer(reducer, initialState);

  const miFuncion = (city) => {
    dispatch({ type: "SEARCH_CITY", payload: { city } });
  };

  const value = { globalState, miFuncion };

  return <Store.Provider value={value}>{children}</Store.Provider>;
};
