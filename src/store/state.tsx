import { create } from 'zustand';
import { Pokemon, TypePokemon } from '../models';
import { TGenerationPokemonStore, TPokemonByTypeStore, TPokemonEvolutionsStore, TPokemonNameStore, TPokemonStore, TTypePokemonStore } from './state.types';

export const usePokemonStore = create<TPokemonStore>((set) => ({
  idPokemon: 1,
  setIdPokemon: (idPokemon: number) => set({idPokemon}),
}));

export const usePokemonEvolutionsStore = create<TPokemonEvolutionsStore>((set) => ({
  evolutions: [],
  setEvolutions: (evolutions: Pokemon[]) => set({evolutions}),
}));

export const usePokemonNameStore = create<TPokemonNameStore>((set) => ({
  pokemonName: '',
  setPokemonName: (pokemonName: string) => set({pokemonName}),
}));

export const useTypePokemonStore = create<TTypePokemonStore>((set) => ({
  typePokemon: [],
  setTypePokemon: (typePokemon: TypePokemon[]) => set({typePokemon}),
}));

export const useGenerationPokemonStore = create<TGenerationPokemonStore>((set) => ({
  generationPokemon: 1,
  setGenerationPokemon: (generationPokemon: number) => set({generationPokemon}),
}));

export const usePokemonByTypeStore = create<TPokemonByTypeStore>((set) => ({
  pokemonsByType: '',
  setPokemonsByType: (pokemonsByType: string) => set({pokemonsByType}),
}));
