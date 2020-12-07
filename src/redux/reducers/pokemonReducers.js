import {
  GET_POKEMON_REQUEST,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAIL,
  GET_POKEMON_IMG_BY_ID_REQUEST,
  GET_POKEMON_IMG_BY_ID_SUCCESS,
  GET_POKEMON_IMG_BY_ID_FAIL,
} from "../constants/pokemonConstants";

const initialState = { pokemonItems: [] };

const pokemonReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POKEMON_REQUEST:
      return { loading: true };
    case GET_POKEMON_SUCCESS: {
      return { loading: false, pokemonItems: payload };
    }
    case GET_POKEMON_FAIL:
      return { loading: false };
    default:
      return state;
  }
};

const pokemonImgReducer = (
  state = { pokeImage: [], loading: false },
  { type, payload }
) => {
  switch (type) {
    case GET_POKEMON_IMG_BY_ID_REQUEST:
      return { loading: true };

    case GET_POKEMON_IMG_BY_ID_SUCCESS: {
      return { loading: false, pokeImage: [state.pokeImage, ...payload] };
    }
    case GET_POKEMON_IMG_BY_ID_FAIL:
      return { loading: false };
    default:
      return state;
  }
};
export { pokemonReducer, pokemonImgReducer };
