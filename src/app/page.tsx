'use client'
import PokeCard from "@/components/PokeCard";
import { PokemonType } from "@/utils/types";
import { useState } from "react";

const Pokecard = () => {
    const [pokemon, setPokemon] = useState<PokemonType | null>(null);
    const [header, setHeader] = useState("Click to catch a Pokémon!");
    
    const fetchPokemon = async():Promise<void> => {
        const randomId = Math.floor(Math.random() * 1000);

        try {
            const respons = await fetch (`https://pokeapi.co/api/v2/pokemon/${randomId}`);
            const data = await respons.json();
            const stats = data.stats.reduce((acc: { [key: string]: number }, stat: { stat: { name: string }, base_stat: number }) => {
                acc[stat.stat.name] = stat.base_stat;
                return acc;
            }, {});

            const capitalizedName = data.name.charAt(0).toUpperCase() + data.name.slice(1);

            setPokemon({
                name: capitalizedName,
                id: data.id,
                image: data.sprites.other['official-artwork'].front_default,
                types: data.types.map((item: { type: { name: string; }; }) => item.type.name),
                attack: stats.attack || 0,
                defence: stats.defence || 0,
                hp: stats.hp || 0
            })

            setHeader(`You caught ${capitalizedName}`);
           
        } catch (error) {
            console.log("API Error: " + error);
        }
    }   

    return (
        <div className="pokecard-container">
            <h1>{header}</h1>
            {pokemon && <PokeCard {...pokemon}/>}
            <button onClick={fetchPokemon} className="pokecard-container__button">
                Catch a Pokémon
            </button>
        </div>
    );
}

export default Pokecard