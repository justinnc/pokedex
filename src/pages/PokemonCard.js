import React from "react";

import { Grid, Paper } from "@material-ui/core";
import formatPokemonId from "../util/formatPokemonId";
import { GET_POKE_IMG_BY_ID } from "../url";
import "./PokemonCard.scss";

function PokemonCard(props) {
  const {
    pokeInfo: { name },
    id,
  } = props;

  return (
    <Grid item xs={6} sm={3} md={1} lg={1} className="pokemon_card">
      <Paper variant="outlined" elevation={3}>
        <h4>{name}</h4>
        <h4>{id}</h4>
        <img
          src={`${GET_POKE_IMG_BY_ID}/${formatPokemonId(id)}.png`}
          alt="alt"
        />
      </Paper>
    </Grid>
  );
}

export default PokemonCard;
