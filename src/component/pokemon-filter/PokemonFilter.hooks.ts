import { useState } from "react";
import { TypePokemon } from "../../models";
import { useGenerationPokemonStore, usePokemonByTypeStore, useTypePokemonStore } from "../../store/state";
import { TPokemonFilterHooks } from "./PokemonFilter.types";
import { TGenerationPokemonStore, TPokemonByTypeStore, TTypePokemonStore } from "../../store/state.types";

export const usePokemonFilterHooks = (): TPokemonFilterHooks => {
    const generations: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
    const typePokemon: TypePokemon[] = useTypePokemonStore((state: TTypePokemonStore) => state.typePokemon);
    const setGenerationPokemon = useGenerationPokemonStore((state: TGenerationPokemonStore) => state.setGenerationPokemon);
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

    return { accordionNameActive, handleAccordionClick, generations, typePokemon, getTypePokemon, getGenerationPokemon };
}
