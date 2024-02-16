import { TypePokemon } from "../../models";
import { useTypePokemonStore } from "../../store/state";
import { TPokemonResistencesHooks, TResistencesProps } from "./PokemonResistences.types";
import './PokemonResistences.css';
import { TTypePokemonStore } from "../../store/state.types";

export const usePokemonResistencesHooks = (resistences: TResistencesProps): TPokemonResistencesHooks => {
    const typePokemon: TypePokemon[] = useTypePokemonStore((state: TTypePokemonStore) => state.typePokemon);

    const getTypeImagePokemon = (resistanceName: string) => {
        const foundType = typePokemon.find((typePokemon: TypePokemon) => typePokemon.name === resistanceName);
    
        return foundType
                ? <img src={foundType.image} width="15px" alt={foundType.name} title={foundType.name} />
                : null;
    }

    return { getTypeImagePokemon, typePokemon };
}
