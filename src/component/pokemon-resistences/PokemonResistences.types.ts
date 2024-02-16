import { TypePokemon } from "../../models";

export type TResistencesProps = {
    resistences: {
        name: string;
        damage_multiplier: number;
        damage_relation: string;
    }[]
};

export type TPokemonResistencesHooks = {
    getTypeImagePokemon: (resistanceName: string) => void;
    typePokemon: TypePokemon[];
};