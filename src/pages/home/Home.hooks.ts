import { usePokemonStore } from "../../store/state";
import { THomeHooks } from "./Home.types";
import { TPokemonStore } from "../../store/state.types";

export const useHomeHooks = (): THomeHooks => {
  const idPokemon = usePokemonStore((state: TPokemonStore) => state.idPokemon);
  const setIdPokemon = usePokemonStore((state: TPokemonStore) => state.setIdPokemon);

  const handlePokemonSelection = (id: number) => {
    setIdPokemon(id);
  };

  return { handlePokemonSelection, idPokemon };
}
