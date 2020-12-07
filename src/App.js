import React from "react";
import PokemonPage from "./pages/PokemonPage";
import Header from "./components/Header/Header";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <PokemonPage />
    </div>
  );
}

export default App;
