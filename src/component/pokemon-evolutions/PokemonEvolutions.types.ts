import { Pokemon } from "../../models";

export type TPokemonEvolutionsTypeProps = {
    evolutions: {
        name: string;
        pokedexId: number;
    }[];
    preEvolution: {
        name: string;
        pokedexIdd: number;
    };
}

export type TPokemonEvolutionsHooks = {
    showPokemon: (id: number) => void;
    pokemons: Pokemon[];
    pokemon: Pokemon | null;
}