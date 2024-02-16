import { PokemonsTable } from "../../component/pokemon-table/PokemonsTable";
import { PokemonDetails } from "../../component/pokemon-details/PokemonDetails";
import { useHomeHooks } from "./Home.hooks";

export const Home = () => {
    const { handlePokemonSelection, idPokemon } = useHomeHooks();

  return (
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col-7">
          <PokemonsTable onSelectPokemon={handlePokemonSelection} />
        </div>
        <div className="col">
            <PokemonDetails pokemonId={idPokemon} />
        </div>
      </div>
    </div>
  );
}
