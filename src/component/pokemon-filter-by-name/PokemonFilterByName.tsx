import { usePokemonFilterByNameHooks } from "./PokemonFilterByName.hooks";
import { Pokemon } from "../../models";

export const PokemonFilterByName = () => {
    const { handleClick, handleInputChange, pokemonList, pokemonExist } = usePokemonFilterByNameHooks();

    return (
        <div className="row">
            <div className="col-9">
                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Cherche pokémon par son nom..." onChange={handleInputChange} />
                <datalist id="datalistOptions">
                    { pokemonList && pokemonList.map(
                        (pokemon: Pokemon) => (
                            <option key={pokemon.id} value={pokemon.slug}></option>
                        )
                    )
                    }
                </datalist>
            </div>
            <button type="button" className="btn btn-success col-3" onClick={handleClick} disabled={!pokemonExist}>GO</button>
        </div>
    );
}

