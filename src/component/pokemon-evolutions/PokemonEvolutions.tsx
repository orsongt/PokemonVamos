
import { TPokemonEvolutionsTypeProps } from './PokemonEvolutions.types';
import { usePokemonEvolutionsHooks } from './PokemonEvolutions.hooks';
import { Pokemon } from '../../models';
import './PokemonEvolutions.css';

export const PokemonEvolutions = (pokemonEvolutions: TPokemonEvolutionsTypeProps) => {
    const { showPokemon, pokemons, pokemon } = usePokemonEvolutionsHooks(pokemonEvolutions);
    
    return (
      <>
        <div className="row">
          {pokemon &&
            <div className='col-3 pokemon-evolution' onClick={() => showPokemon(pokemon.id)} title={ pokemon?.name }>
              <img src={ pokemon?.sprite } alt={ pokemon?.name } title={ pokemon?.name } style={{ width: '50px' }} />
              <br />
              <strong style={{fontSize: '10px'}}>n°{ pokemon?.pokedexId } - {pokemon?.name}</strong>
            </div>
          }

          {pokemons && pokemons.map(
            (pokemon: Pokemon) => (
              <div className='col-3 pokemon-evolution' onClick={() => showPokemon(pokemon.id)} key={pokemon.id} title={ pokemon?.name }>
                <img src={ pokemon.sprite } alt={ pokemon.name } title={ pokemon.name } style={{ width: '50px' }} />
                <br />
                <strong style={{fontSize: '10px'}}>n°{ pokemon.pokedexId } - {pokemon.name}</strong>
              </div>
              )
            )}
        </div>
      </>
    );
}
