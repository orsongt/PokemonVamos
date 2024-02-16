import { Pokemon } from "../../models";

export type TPokemonFilterByNameHooks = {
    handleClick: () => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    pokemonList: Pokemon[];
    pokemonExist: boolean;
}