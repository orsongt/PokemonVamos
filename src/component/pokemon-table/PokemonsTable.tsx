import { Pokemon } from '../../models';
import { PokemonFilter } from '../pokemon-filter/PokemonFilter';
import { TPokemonsTableProps } from './PokemonsTable.types';
import { usePokemonsTableHooks } from './PokemonsTable.hooks';
import './PokemonsTable.css';

export const PokemonsTable = (props: TPokemonsTableProps) => {
    const { pokemons, handlePokemonClick } = usePokemonsTableHooks(props);

    return (
        <div className="pokemons-list">
            <div className="container">
                <div className='row col-12'>
                    <PokemonFilter />
                </div>
                <div className='row col-12'>
                    { pokemons && pokemons.map((pokemon: Pokemon, index: number) => (
                        <a
                            className="pokemon col-4 col-sm-4 col-md-4 col-lg-3 col-xl-2"
                            key={`pokemon-list-${index}`}
                            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => handlePokemonClick(pokemon.id, event)}
                            href="#pokemon-details">
                            <img src={ pokemon.sprite } alt={ pokemon.name } title={ pokemon.name } />
                            <br />
                            <span className="badge text-bg-light pokemon-name">n°{ pokemon.pokedexId }</span>
                            <br />
                            <span className="badge text-bg-success pokemon-name">{pokemon.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
