import { TypePokemon } from "../../models";

export type TPokemonFilterHooks = {
    accordionNameActive: string;
    handleAccordionClick: (accordionName: string) => void;
    generations: number[];
    typePokemon: TypePokemon[];
    getGenerationPokemon: (generation: number) => void;
    getTypePokemon: (type: string) => void;
}