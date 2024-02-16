import { Pokemon, PokemonTeam } from "../../models";

export type TTeamHooks = {
    idName: string | undefined;
    handlePokemonSelection: (pokemonId: number) => void;
    handleSetPokemonTeamSelected: (pokemonId: number) => void;
    pokemonSelected: Pokemon | null;
    pokemonTeamSelected: PokemonTeam | null;
    pokemonTeam: PokemonTeam[];
    addPokemonTeam: (pokemon: Pokemon) => void;
    updatePokemonTeam: (pokemonTeam: PokemonTeam) => void;
    removePokemonFromTeam: (pokemonId: number) => void;
};