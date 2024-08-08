import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";

// 1. Definimos los tipos de acciones
export const GET_ALL_MODELS = "GET_ALL_MODELS";
export const GET_RECOMMENDED_MODEL = "GET_RECOMMENDED_MODEL";
export const GET_SUGGESTION_PROFILE = "GET_SUGGESTION_PROFILE";
export const RESET_RECOMMENDED_MODEL = "RESET_RECOMMENDED_MODEL";

export const SET_LOADING = "SET_LOADING";
export const CLEAR_LOADING = "CLEAR_LOADING";
export const SET_ERROR = "SET_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";

export const setLoading = () => ({
  type: SET_LOADING,
});

export const clearLoading = () => ({
  type: CLEAR_LOADING,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const getAllModels = () => {
  return async (dispatch) => {
    dispatch(setLoading());
    dispatch(clearError());
    try {
      const response = await axios.get(
        "https://dotnetapiteslax.azurewebsites.net/ModelSpecifications"
      );
      console.log(response.data);
      return dispatch({
        type: GET_ALL_MODELS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error:", error);
      dispatch(
        setError(
          "Error al intentar obtener la información de los modelos, por favor inténtelo de nuevo."
        )
      );
    } finally {
      dispatch(clearLoading());
    }
  };
};

export const getRecommendedModel = (requirements) => {
  return async (dispatch) => {
    dispatch(setLoading());
    dispatch(clearError());
    try {
      const response = await axios.post(
        "https://nodeapiopenai.azurewebsites.net/recommendation/model",
        {
          requirements: requirements,
        }
      );
      console.log(response.data);
      return dispatch({
        type: GET_RECOMMENDED_MODEL,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error:", error);
      dispatch(
        setError(
          "Error al intentar generar una recomendación, por favor inténtelo de nuevo."
        )
      );
    } finally {
      dispatch(clearLoading());
    }
  };
};

export const getSuggestionProfile = (profile) => {
  return async (dispatch) => {
    dispatch(setLoading());
    dispatch(clearError());
    try {
      const response = await axios.post(
        "https://nodeapiopenai.azurewebsites.net/generate/profile",
        {
          profile: profile,
        }
      );
      console.log(response.data);
      return dispatch({
        type: GET_SUGGESTION_PROFILE,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error:", error);
      dispatch(
        setError(
          "Error al intentar generar un perfil, por favor inténtelo de nuevo."
        )
      );
    } finally {
      dispatch(clearLoading());
    }
  };
};

export const resetRecommendedModel = () => {
  return (dispatch) => {
    return dispatch({
      type: RESET_RECOMMENDED_MODEL,
    });
  };
};
