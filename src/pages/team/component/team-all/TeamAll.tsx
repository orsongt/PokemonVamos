import { SyntheticEvent } from "react";
import { PokemonDetailsShort } from "../../../../component/pokemon-details-short/PokemonDetailsShort";
import { PokemonsTable } from "../../../../component/pokemon-table/PokemonsTable";
import { PokemonTeam } from "../../../../models";
import { useTeamHooks } from "../../Team.hooks";
import { TeamList } from "../team-list/TeamList";

export const TeamAll = () => {
    const { handlePokemonSelection, pokemonSelected, pokemonTeam, addPokemonTeam, removePokemonFromTeam } = useTeamHooks();
    const removePokemon = (pokemonId: number, event?: SyntheticEvent<HTMLSpanElement>) => {
        if (event) {
            event.preventDefault();
        }
        removePokemonFromTeam(pokemonId);
    }

    return (
    <div className="container-md">
        <div className="row align-items-start">
            <div className="col-12 col-sm-6 col-md-12 col-lg-8 col-xl-7">
                <PokemonsTable onSelectPokemon={handlePokemonSelection} />
            </div>
            <div className="col-12 col-sm-6 col-md-12 col-lg-4 col-xl-5">
                { pokemonSelected &&
                    <div className="col-12">
                        <PokemonDetailsShort pokemon={pokemonSelected} />
                        <div className="d-grid">
                            { pokemonTeam && 
                                pokemonTeam.find((pokemonFoundOnTeam: PokemonTeam) => pokemonFoundOnTeam.pokemon.id === pokemonSelected.id)
                                    ? <button className="btn btn-info" type="button">{ pokemonSelected.name } fait déjà partie de ton équipe </button>
                                    : <button className="btn btn-success" type="button" onClick={() => addPokemonTeam(pokemonSelected)}>+ Ajouter { pokemonSelected.name } à ton équipe </button>
                            }
                        </div>
                    </div>
                }
                <h2 className="text-pokemon">Mon équipe</h2>
                <TeamList pokemonTeam={pokemonTeam} onRemovePokemonFromTeam={removePokemon} />
            </div>
        </div>
    </div>
    );
};