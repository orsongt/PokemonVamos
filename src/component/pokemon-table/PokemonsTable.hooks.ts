import { useEffect, useState } from 'react';
import { PokemonService } from '../../services';
import { Pokemon } from '../../models';
import { useGenerationPokemonStore, usePokemonByTypeStore } from '../../store/state';
import { TPokemonsTableHooks, TPokemonsTableProps } from './PokemonsTable.types';
import './PokemonsTable.css';
import { TGenerationPokemonStore, TPokemonByTypeStore } from '../../store/state.types';

export const usePokemonsTableHooks = (pokemonsTable: TPokemonsTableProps): TPokemonsTableHooks => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const generationPokemon = useGenerationPokemonStore((state: TGenerationPokemonStore) => state.generationPokemon);
    const pokemonsByType = usePokemonByTypeStore((state: TPokemonByTypeStore) => state.pokemonsByType);

    useEffect(() => {
      const getAllPokemonsByGeneration = async () => {
        try {
          const res = await PokemonService.getPokemonsByGeneration(generationPokemon);          
          setPokemons(res);
        } catch (error) {
          console.error(error);
        }
      };
  
      if (generationPokemon) {
        getAllPokemonsByGeneration();
      }
    }, [generationPokemon]
    );

    useEffect(() => {
        const getAllPokemonsByType = async () => {
          try {
            const res = await PokemonService.getPokemonsByType(pokemonsByType);          
            setPokemons(res);
          } catch (error) {
            console.error(error);
          }
        };
    
        if (pokemonsByType) {
          getAllPokemonsByType();
        }
      }, [pokemonsByType]
      );

    const handlePokemonClick = (id: number) => {
      pokemonsTable.onSelectPokemon(id);
    };

    return { pokemons, handlePokemonClick};
}
