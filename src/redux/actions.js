import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";

// 1. Definimos los tipos de acciones
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_ALL_MODELS = "GET_ALL_MODELS";

// 2. Definimos las acciones
export const getAllPokemons = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      console.log("response", response);
      return dispatch({
        type: GET_ALL_POKEMONS,
        payload: response.data.results,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const getAllModels = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://localhost:7172/api/Car');
      console.log(response.data);
      return dispatch({
        type: 'GET_ALL_MODELS',
        payload: response.data, // asegúrate de acceder a response.data
      });
    } catch (error) {
      console.error('Error:', error);
      // Aquí puedes despachar una acción para manejar errores si es necesario
    }
  };
};
