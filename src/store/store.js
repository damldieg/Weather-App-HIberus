import React from "react";

//Guarda en una variable el contexto creado
const Store = React.createContext();
Store.displayName = "Store";

//Crea y exporta un custom hook usando el contexto anteriormente creado
export const useStore = () => React.useContext(Store);

//Crea y exporta el provider
export const StoreProvider = ({ children, initialState, reducer }) => {
  // Crea un estado global usando el reducer y el initialState
  const [globalState, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Store.Provider value={[globalState, dispatch]}>{children}</Store.Provider>
  );
};
