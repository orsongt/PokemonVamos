import { SyntheticEvent } from "react";
import { Pokemon } from "../../models";

export type TPokemonsTableProps = {
    onSelectPokemon: (id: number) => void;
};

export type TPokemonsTableHooks = {
    pokemons: Pokemon[];
    handlePokemonClick: (id: number, event: SyntheticEvent<HTMLAnchorElement>) => void;
}
