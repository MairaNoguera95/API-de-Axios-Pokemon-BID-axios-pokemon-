import React, {useState, useEffect} from 'react'
import '../App.css';

const PokemonApi = () => {

    const [pokemones, setPokemones] = useState ([]);
   

    useEffect (() => {
        async function obtnerPokemones(){
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0');
            const data = await response.json();

            setPokemones(data.results);
            console.log(pokemones);
        }
        obtnerPokemones();
    }, [])

    return (
        <div className="pokemon-list" style={{margin:'auto'}}>
                {
                    pokemones.map((pokemon, index) =>{
                    return <li key={index}>{pokemon.name}</li> 
                    })
                }
        </div>
    )
}

export default PokemonApi
