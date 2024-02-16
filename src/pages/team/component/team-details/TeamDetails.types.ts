import { SyntheticEvent } from "react";
import { PokemonTeam } from "../../../../models";

export type TTeamDetailsHooks = {
    pokemonTeamSelected: PokemonTeam | null;
    pokemonTeam: PokemonTeam[];

    pokemonNick: string;
    pokemonDescription: string;
    handleSetPokemonNick: (nick: string) => void;
    handleSetPokemonDescription: (description: string) => void;
    isFormUpdated: boolean;
    pokemonTeamToShow: PokemonTeam[];
    handleSetPokemonTeamToShow: (pokemonTeamToShow: {id: number, name: string}[]) => void;
    removePokemon: (pokemonId: number, event?: SyntheticEvent<HTMLSpanElement>) => void;
    handleUpdatePokemonTeam: () => void;    
};
