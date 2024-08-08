import {
  GET_ALL_MODELS,
  GET_RECOMMENDED_MODEL,
  GET_SUGGESTION_PROFILE,
  SET_LOADING,
  CLEAR_LOADING,
  SET_ERROR,
  CLEAR_ERROR,
  RESET_RECOMMENDED_MODEL,
} from "./actions";

const initialState = {
  recommendedModel: [],
  modelSpecifications: [],
  suggestedProfile: [],
  loading: false,
  error: null,
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_MODELS:
      return {
        ...state,
        modelSpecifications: action.payload,
      };
    case GET_RECOMMENDED_MODEL:
      return {
        ...state,
        recommendedModel: action.payload,
      };
    case GET_SUGGESTION_PROFILE:
      return {
        ...state,
        suggestedProfile: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case RESET_RECOMMENDED_MODEL:
      return {
        ...state,
        recommendedModel: [],
      };
    default:
      return state;
  }
}
