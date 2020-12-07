import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { pokemonReducer, pokemonImgReducer } from "./reducers/pokemonReducers";

const reducer = combineReducers({
  pokemon: pokemonReducer,
  pokeImage: pokemonImgReducer,
});
const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
