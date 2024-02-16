import { Pokemon, TypePokemon } from "../models";

export type TPokemonStore = {
    idPokemon: number;
    setIdPokemon: (id: number) => void;
};

export type TPokemonEvolutionsStore = {
    evolutions: Pokemon[];
    setEvolutions: (pokemon: Pokemon[]) => void;
};
  
export type TPokemonNameStore = {
    pokemonName: string;
    setPokemonName: (pokemonName: string) => void;
};

export type TTypePokemonStore = {
    typePokemon: TypePokemon[];
    setTypePokemon: (typePokemon: TypePokemon[]) => void;
};

export type TGenerationPokemonStore = {
    generationPokemon: number;
    setGenerationPokemon: (generationPokemon: number) => void;
};

export type TPokemonByTypeStore = {
    pokemonsByType: string;
    setPokemonsByType: (pokemonsByType: string) => void;
};