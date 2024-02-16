import { useEffect, useState } from "react";
import { Pokemon } from "../../models";
import { PokemonService } from "../../services";
import { usePokemonNameStore } from "../../store/state";
import { TPokemonFilterByNameHooks } from "./PokemonFilterByName.types";
import { TPokemonNameStore } from "../../store/state.types";

export const usePokemonFilterByNameHooks = (): TPokemonFilterByNameHooks => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [pokemonExist, setPokemonExist] = useState<boolean>(false);
    const setPokemonName = usePokemonNameStore((state: TPokemonNameStore) => state.setPokemonName);
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const pokemonName = event.target.value;
        setInputValue(pokemonName);
        setPokemonExist(pokemonList.some((pokemon: Pokemon) => pokemon.slug === pokemonName));
    };

    const handleClick = () => {
        setPokemonName(inputValue);
    }

    useEffect(() => {
        const getAllPokemons = async () => {
          try {
            const res = await PokemonService.getPokemons();
            setPokemonList(res);
          } catch (error) {
            console.error(error);
          }
        };
    
        getAllPokemons();
      }, []
    );

    return { handleClick, handleInputChange, pokemonList, pokemonExist };
}

