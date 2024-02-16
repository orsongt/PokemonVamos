import { useEffect } from "react";
import { usePokemonStore, useTypePokemonStore } from "../../store/state";
import { PokemonService } from "../../services";
import { THomeHooks } from "./Home.types";
import { TPokemonStore, TTypePokemonStore } from "../../store/state.types";

export const useHomeHooks = (): THomeHooks => {
  const idPokemon = usePokemonStore((state: TPokemonStore) => state.idPokemon);
  const setIdPokemon = usePokemonStore((state: TPokemonStore) => state.setIdPokemon);
  const setTypePokemon = useTypePokemonStore((state: TTypePokemonStore) => state.setTypePokemon);

  const handlePokemonSelection = (id: number) => {
    setIdPokemon(id);
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
  }, [idPokemon, setTypePokemon]);

  return { handlePokemonSelection, idPokemon };
}
