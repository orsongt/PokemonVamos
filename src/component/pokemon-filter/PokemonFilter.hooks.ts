import { useEffect, useState } from "react";
import { TypePokemon } from "../../models";
import { useGenerationPokemonStore, usePokemonByTypeStore, useTypePokemonStore } from "../../store/state";
import { TPokemonFilterHooks } from "./PokemonFilter.types";
import { TGenerationPokemonStore, TPokemonByTypeStore, TTypePokemonStore } from "../../store/state.types";
import { PokemonService } from "../../services";

export const usePokemonFilterHooks = (): TPokemonFilterHooks => {
    const generations: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
    const typePokemon: TypePokemon[] = useTypePokemonStore((state: TTypePokemonStore) => state.typePokemon);
    const setGenerationPokemon = useGenerationPokemonStore((state: TGenerationPokemonStore) => state.setGenerationPokemon);
    const setTypePokemon = useTypePokemonStore((state: TTypePokemonStore) => state.setTypePokemon);
    const setPokemonsByType = usePokemonByTypeStore((state: TPokemonByTypeStore) => state.setPokemonsByType);
    const [accordionNameActive, setAccordionName] = useState('');
    
    const getGenerationPokemon = (generation: number) => {
        setGenerationPokemon(generation);
    }

    const getTypePokemon = (type: string) => {
        setPokemonsByType(type);
    }

    const handleAccordionClick = (accordionName: string) => {
        accordionNameActive === accordionName
            ? setAccordionName('')
            : setAccordionName(accordionName);
    };

    useEffect(() => {
        const getTypePokemon = async () => {
          try {
            const res = await PokemonService.getTypePokemon();
            setTypePokemon(res);
          } catch (error) {
            console.error(error);
          }
        };
    
        getTypePokemon();
      }, [setTypePokemon]);

    return { accordionNameActive, handleAccordionClick, generations, typePokemon, getTypePokemon, getGenerationPokemon };
}
