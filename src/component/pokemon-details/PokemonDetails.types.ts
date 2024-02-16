import { Pokemon } from "../../models";

export type TIdPokemonProps = {
    pokemonId: number;
};

export type TPokemonDetailsHooks = {
    handleTabClick: (tabName: string) => void;
    pokemon: Pokemon | null;
    activeTab: string;
    handleSetPokemon?: (pokemonToSet: Pokemon) => void;
}
