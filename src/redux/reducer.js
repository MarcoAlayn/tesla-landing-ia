import { GET_ALL_POKEMONS, GET_ALL_MODELS } from "./actions";

const initialState = {
  pokemons: [],
  allTeslaModels: [],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case GET_ALL_MODELS:
      return {
        ...state,
        allTeslaModels: action.payload,
      };
    default:
      return state;
  }
}
