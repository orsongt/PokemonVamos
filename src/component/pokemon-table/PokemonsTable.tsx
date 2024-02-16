import { Pokemon } from '../../models';
import { PokemonFilter } from '../pokemon-filter/PokemonFilter';
import { TPokemonsTableProps } from './PokemonsTable.types';
import { usePokemonsTableHooks } from './PokemonsTable.hooks';
import './PokemonsTable.css';

export const PokemonsTable = (props: TPokemonsTableProps) => {
    const { pokemons, handlePokemonClick } = usePokemonsTableHooks(props);

    return (<>
            <div className="row pokemons-list">
                <PokemonFilter />
                <br /><br /><br /><br />
                { pokemons && pokemons.map((pokemon: Pokemon, index: number) => (
                    <div className="pokemon col-xs-12 col-sm-6 col-md-4 col-lg-2" key={`pokemon-list-${index}`} onClick={() => handlePokemonClick(pokemon.id)}>
                        <img src={ pokemon.sprite } alt={ pokemon.name } title={ pokemon.name } />
                        <br />
                        <span className="badge text-bg-light pokemon-name">n°{ pokemon.pokedexId }</span>
                        <br />
                        <span className="badge text-bg-success pokemon-name">{pokemon.name}</span>
                    </div>
                ))}
            </div>
    </>);
}
