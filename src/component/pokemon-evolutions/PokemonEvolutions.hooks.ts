import { useEffect, useState } from 'react';
import { PokemonService } from '../../services';
import { Pokemon } from '../../models';
import { usePokemonStore } from '../../store/state';
import { TPokemonEvolutionsHooks, TPokemonEvolutionsTypeProps } from './PokemonEvolutions.types';
import './PokemonEvolutions.css';
import { TPokemonStore } from '../../store/state.types';

export const usePokemonEvolutionsHooks = (pokemonEvolutions: TPokemonEvolutionsTypeProps): TPokemonEvolutionsHooks => {
    const setIdPokemon = usePokemonStore((state: TPokemonStore) => state.setIdPokemon);
    const [pokemons, setPokemons] = useState<Pokemon[] | []>([]);
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
      const getPokemon = async (pokedexId: number, isEvolution?: boolean) => {
        try {
          const res = await PokemonService.getPokemon(pokedexId);
          
          isEvolution
            ? setPokemons(prevPokemons => [...prevPokemons, res])
            : setPokemon(res);
        } catch (error) {
          console.error(error);
        }
      };
  
      pokemonEvolutions.evolutions.forEach(
        (evolution: {name: string; pokedexId: number}) => {          
          getPokemon(evolution.pokedexId, true);
        }
      );

      if (pokemonEvolutions.preEvolution.pokedexIdd) {
        getPokemon(pokemonEvolutions.preEvolution.pokedexIdd)
      }
    }, []
    );

    const showPokemon = ((id: number) => {
      setIdPokemon(id);
    });

    return { showPokemon, pokemons, pokemon };
}