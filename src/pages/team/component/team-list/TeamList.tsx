import { Link } from "react-router-dom";
import { PokemonTeam } from "../../../../models";
import { TTeamListProps } from "./TeamList.types";
import './TeamList.css';

export const TeamList = ({ pokemonTeam, onRemovePokemonFromTeam }: TTeamListProps) => {
    return (
    <div className="container">
        <div className="btn-group row" role="group" aria-label="Basic outlined example">
            <div className="col">
            { pokemonTeam && pokemonTeam.map(
                (pokemonTeam: PokemonTeam) => (
                    <Link
                        key={`team-pokemon-${pokemonTeam.pokemon.pokedexId}`}
                        to={`/team/${pokemonTeam.pokemon.id}`}
                        style={{
                            background: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemonTeam.pokemon.pokedexId}.gif) center/contain no-repeat, 
                url(${pokemonTeam.pokemon.apiTypes[0].image}) center/contain no-repeat`}}
                        className="pokemon-list-item position-relative m-2"
                        title={pokemonTeam.pokemon.name}>
                        <span
                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                            onClick={(event) => onRemovePokemonFromTeam(pokemonTeam.pokemon.id, event)}
                            title={`Enlever ${pokemonTeam.pokemon.name} de ton équipe`}>
                            x
                        </span>
                        <span className="badge rounded-pill text-light bg-success position-absolute bottom-0">
                            {pokemonTeam.pokemon.name}
                        </span>
                    </Link>
                )
            )}
            </div>
        </div>
    </div>);
}
