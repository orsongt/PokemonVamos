import { useEffect, useState } from 'react';
import { PokemonService } from '../../services';
import { Pokemon } from '../../models';
import { usePokemonStore, usePokemonNameStore } from '../../store/state';
import { TIdPokemonProps, TPokemonDetailsHooks } from './PokemonDetails.types';
import { TPokemonNameStore, TPokemonStore } from '../../store/state.types';
import './PokemonDetails.css';

export const usePokemonDetailsHooks = ({pokemonId}: TIdPokemonProps): TPokemonDetailsHooks => {
    const idPokemon = usePokemonStore((state: TPokemonStore) => state.idPokemon);
    const pokemonName = usePokemonNameStore((state: TPokemonNameStore) => state.pokemonName);
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [activeTab, setActiveTab] = useState('stats');

    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    };

    const handleSetPokemon = (pokemonToSet: Pokemon) => {
        setPokemon(pokemonToSet);
    }

    useEffect(() => {
      const getPokemon = async () => {
        try {
          const res = await PokemonService.getPokemon(pokemonId);
          setPokemon(res);
        } catch (error) {
          console.error(error);
        }
      };
      
      getPokemon();
    }, [idPokemon]
    );

    useEffect(() => {
        const getPokemonByName = async () => {
          try {
            const res = await PokemonService.getPokemon(pokemonName);
            setPokemon(res);
          } catch (error) {
            console.error(error);
          }
        };
        
        if (pokemonName) {
            getPokemonByName();
        }
      }, [pokemonName]
    );    

    return { handleTabClick, pokemon, activeTab, handleSetPokemon };
}
