import { PokemonsTable } from "../../component/pokemon-table/PokemonsTable";
import { PokemonDetails } from "../../component/pokemon-details/PokemonDetails";
import { useHomeHooks } from "./Home.hooks";

export const Home = () => {
    const { handlePokemonSelection, idPokemon } = useHomeHooks();

  return (
    <div className="container-md">
      <div className="row align-items-start">
        <div className="col-12 col-sm-6 col-md-6 col-lg-7 col-xl-7">
          <PokemonsTable onSelectPokemon={handlePokemonSelection} />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-5 col-xl-5" id="pokemon-details">
          <PokemonDetails pokemonId={idPokemon} />
        </div>
      </div>
    </div>
  );
}
