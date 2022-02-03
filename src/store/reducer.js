export const SEARCH_CITY = "SEARCH_CITY";

//Crea y exporta el initialState con un array de reservas vacias
export const initialState = {
  data: [],
};

//Crea la accion para agregar una nueva reserva
export const searchCity = (city) => ({
  type: SEARCH_CITY,
  city,
});



//Crea el reducer
export const reducer = (state = initialState, action) => {
  if (action.type === SEARCH_CITY) {
    return {
      ...state,
      data: state.data.concat(action.data),
    };
  }
};

