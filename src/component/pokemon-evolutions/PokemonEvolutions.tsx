
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
            <div className='col-4 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 pokemon-evolution border border-opacity-25' onClick={() => showPokemon(pokemon.id)} key={pokemon.id} title={ pokemon?.name }>
              <img src={ pokemon?.sprite } alt={ pokemon?.name } title={ pokemon?.name } style={{ width: '50px' }} />
              <br />
              <strong style={{fontSize: '10px'}}>
                n°{ pokemon?.pokedexId }<br />
                {pokemon?.name}
              </strong>
            </div>
          }

          {pokemons && pokemons.map(
            (pokemon: Pokemon) => (
              <div className='col-4 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 pokemon-evolution border border-opacity-25' onClick={() => showPokemon(pokemon.id)} key={pokemon.id} title={ pokemon?.name }>
                <img src={ pokemon.sprite } alt={ pokemon.name } title={ pokemon.name } style={{ width: '50px' }} />
                <br />
                <strong style={{fontSize: '10px'}}>
                  n°{ pokemon.pokedexId }<br />
                  {pokemon.name}
                </strong>
              </div>
              )
            )}
        </div>
      </>
    );
}
