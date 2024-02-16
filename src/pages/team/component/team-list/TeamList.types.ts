import { SyntheticEvent } from "react";
import { PokemonTeam } from "../../../../models";

export type TTeamListProps = {
    pokemonTeam: PokemonTeam[];
    onRemovePokemonFromTeam: (id: number, event?: SyntheticEvent<HTMLSpanElement>) => void;
};
