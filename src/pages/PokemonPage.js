import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Button } from "@material-ui/core";
import { fetchAllPokemon } from "../redux/actions/pokemonActions";

import PokemonCard from "./PokemonCard";

function PokemonPage() {
  const dispatch = useDispatch();
  const { pokemonItems } = useSelector((state) => state.pokemon);
  return (
    <div>
      <Button type="button" onClick={() => dispatch(fetchAllPokemon())}>
        fetch pokemon
      </Button>

      <Grid container spacing={0}>
        {pokemonItems?.results?.map((pokeInfo, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <PokemonCard pokeInfo={pokeInfo} id={idx + 1} key={idx} />
        ))}
      </Grid>
    </div>
  );
}

export default PokemonPage;
