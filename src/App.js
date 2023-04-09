
import React, { useState } from "react"
import PokemonApi from "./Components/PokemonApi";


const App = () => {
  //estado y funciones para obtener el listado de pokemons (o pokemones) aqui.
  const [show, setShow] = useState(false);
  const mostar = () => {
    setShow(!show);
  };
  return (
    <div className="container" style={{marginLeft:'45%'}}>
        <button onClick={() => mostar()} style={{backgroundColor:'blue', borderRadius: '10px', color:'white', height:'50px'}}>
        Fetch Pokemon
        </button>
        {show && <PokemonApi />}
    </div>
    )
}
export default App;