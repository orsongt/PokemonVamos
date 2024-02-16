import axios from 'axios';
import { API } from '../API';
import { Pokemon, TypePokemon } from '../models';

const PokemonService = {
    getPokemon: async (idNamePokemon: number | string) => {
        try {
            const response = await axios.get<Pokemon>(API.onePokemon + idNamePokemon);
            return response.data;
        } catch (error) {
            console.error('Ce n\'est pas possible recuperer ce pokemon: ', error);
            throw error;
        }
    },
    getPokemons: async () => {
        try {
            const response = await axios.get<Pokemon[]>(API.allPokemons);
            return response.data;
        } catch (error) {
            console.error('Ce n\'est pas possible recuperer des pokemons: ', error);
            throw error;
        }
    },
    getPokemonsByGeneration: async (generation: number) => {
        try {
            const response = await axios.get<Pokemon[]>(API.allPokemonsByGeneration + generation);
            return response.data;
        } catch (error) {
            console.error('Ce n\'est pas possible recuperer des pokemons: ', error);
            throw error;
        }
    },
    getPokemonsByType: async (type: string) => {
        try {
            const response = await axios.get<Pokemon[]>(API.allPokemonsByType + type);
            return response.data;
        } catch (error) {
            console.error('Ce n\'est pas possible recuperer des pokemons par type: ', error);
            throw error;
        }
    },
    getTypePokemon: async () => {
        try {
            const response = await axios.get<TypePokemon[]>(API.typePokemon);
            return response.data;
        } catch (error) {
            console.error('Ce n\'est pas possible recuperer les types: ', error);
            throw error;
        }
    },
};

export { PokemonService };
