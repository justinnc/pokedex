import React from "react";
import PokeDexImage from "../../images/pokemon.png";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <img src={PokeDexImage} alt="pokemon_icon" />
    </div>
  );
}
