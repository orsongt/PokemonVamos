import { PokemonStats } from "../pokemon-stats/PokemonStats";
import { TPokemonDetailsShortProps } from "./PokemonDetailsShort.types";
import './PokemonDetailsShort.css';

export const PokemonDetailsShort = ({ pokemon }: TPokemonDetailsShortProps) => {
    return (<>
        { pokemon && <div className="pokemon-short">
            <h2 className="pokemon-name">
                <span>{ pokemon.name }</span>
                <img src={pokemon.sprite} width="70px" />
                {
                    pokemon.apiTypes.map((apiType: { name: string; image: string; }) => (
                        <img key={`img-type-${apiType.name}`} src={apiType.image} width="35px" alt={apiType.name} title={apiType.name} />
                    ))
                }
                
                <br />
            </h2>
            <div>
                <PokemonStats stats={ pokemon.stats } />
            </div>
        </div>}
    </>);
}
