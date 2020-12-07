import axios from "axios";
import { GET_ALL_POKE_API, GET_POKE_IMG_BY_ID } from "../../url";
import {
  GET_POKEMON_REQUEST,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAIL,
  GET_POKEMON_IMG_BY_ID_REQUEST,
  GET_POKEMON_IMG_BY_ID_SUCCESS,
  GET_POKEMON_IMG_BY_ID_FAIL,
} from "../constants/pokemonConstants";

const fetchAllPokemon = () => async (dispatch) => {
  try {
    dispatch({ type: GET_POKEMON_REQUEST });

    const { data } = await axios.get(
      `${GET_ALL_POKE_API}?limit=${20}&offset=${0}`
    );

    dispatch({
      type: GET_POKEMON_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_POKEMON_FAIL,
      payload: error.message,
    });
  }
};
const fetchPokemonImgById = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_POKEMON_IMG_BY_ID_REQUEST });

    const { data } = await axios.get(`${GET_POKE_IMG_BY_ID}00${id}.png`);

    dispatch({
      type: GET_POKEMON_IMG_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_POKEMON_IMG_BY_ID_FAIL,
      payload: error.message,
    });
  }
};

export { fetchAllPokemon, fetchPokemonImgById };
