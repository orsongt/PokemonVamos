import { PokemonDetailsShort } from "../../../../component/pokemon-details-short/PokemonDetailsShort";
import { PokemonTeam } from "../../../../models";
import { TeamList } from "../team-list/TeamList";
import { useTeamDetailsHooks } from "./TeamDetails.hooks";
import { SearchOnList } from "../../../../component/search-on-list/SearchOnList";
import './TeamDetails.css';

export const TeamDetails = () => {
    const {
        pokemonTeamSelected, pokemonTeam,
        pokemonNick, pokemonDescription, handleSetPokemonNick, handleSetPokemonDescription, isFormUpdated, pokemonTeamToShow, handleSetPokemonTeamToShow, removePokemon, handleUpdatePokemonTeam
    } = useTeamDetailsHooks();

    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 col-xxl-8">
                    <h2 className="text-pokemon">Ton équipe</h2>
                    <SearchOnList list={
                        pokemonTeam.map((pokemonTeam: PokemonTeam) => (
                            {
                                id: pokemonTeam.pokemon.id,
                                name: `${pokemonTeam.pokemon.name}`
                            }
                        ))
                    } onChange={handleSetPokemonTeamToShow} />
                    <TeamList pokemonTeam={pokemonTeamToShow} onRemovePokemonFromTeam={removePokemon} />
                </div>

                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4 col-xxl-4">
                    <h2 className="text-pokemon">+ Informations</h2>
                    <div className="col-12 pokemon-info" style={{backgroundImage: `url(${pokemonTeamSelected?.pokemon.image})` }}>
                            { pokemonTeamSelected && 
                                <PokemonDetailsShort pokemon={pokemonTeamSelected.pokemon} />
                            }
                        <div className="form-floating mb-3 mt-3">
                            <input
                                type="text"
                                className="form-control opacity-75"
                                id="floatingInput"
                                placeholder={pokemonTeamSelected?.nick}
                                value={pokemonNick}
                                onChange={(event) => handleSetPokemonNick(event.target.value)} />
                            <label htmlFor="floatingInput">Pseudo</label>
                        </div>

                        <div className="form-floating col-12">
                            <textarea
                                className="form-control opacity-75"
                                placeholder="Leave a comment here"
                                id="floatingTextarea2"
                                style={{ height: '100px'}}
                                value={pokemonDescription}
                                onChange={(event) => handleSetPokemonDescription(event.target.value)}>
                            </textarea>
                            <label htmlFor="floatingTextarea2">Description</label>
                        </div>

                        <div className="d-grid mt-2">
                            <button
                                className={`btn btn-${isFormUpdated ? 'primary' : 'secondary'}`}
                                type="button"
                                onClick={handleUpdatePokemonTeam}
                                disabled={!isFormUpdated}>
                                Sauvegarder
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
