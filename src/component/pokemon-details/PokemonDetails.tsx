import { PokemonEvolutions } from '../pokemon-evolutions/PokemonEvolutions';
import { PokemonResistences } from '../pokemon-resistences/PokemonResistences';
import { PokemonFilterByName } from '../pokemon-filter-by-name/PokemonFilterByName';
import { PokemonStats } from '../pokemon-stats/PokemonStats';
import { usePokemonDetailsHooks } from './PokemonDetails.hooks';
import { TIdPokemonProps } from './PokemonDetails.types';
import './PokemonDetails.css';

export const PokemonDetails = ({pokemonId}: TIdPokemonProps) => {
    const { handleTabClick, pokemon, activeTab } = usePokemonDetailsHooks({ pokemonId });

    return (<>
        { pokemon && (
            <div
                className="card mb-3 pokemon-details"
                style={{maxWidth: '540px'}} key={pokemon.id}>
                <PokemonFilterByName />
                <h1 className='pokemon-name-title text-pokemon'>
                    {pokemon.name}
                </h1>
                <br />
                <div className="row g-0">
                    <div className="col-4">
                        <h5 className="card-title">
                            <small style={{ fontSize: '10px' }}>n°{pokemon.pokedexId} - </small>
                            <small style={{ fontSize: '10px' }}>Generation {pokemon.apiGeneration}</small>
                        </h5>
                        <img src={ pokemon.image } alt={ pokemon.name } title={ pokemon.name } className="img-fluid rounded-start" />

                        { pokemon.apiTypes.map(
                            (type: {name: string, image: string}) => (
                                <div className="pokemon-type badge bg-info" title={ type.name } key={type.image}>
                                    <img src={ type.image } className="img-fluid rounded-start" />
                                </div>
                            )
                        )
                        }
                    </div>
                    <div className="col-8">
                        <h5 className="card-title">Evolutions</h5>
                        <PokemonEvolutions
                            evolutions={pokemon.apiEvolutions}
                            preEvolution={pokemon.apiPreEvolution}
                        />
                    </div>
                    <div className="col-md-12">
                    <br />
                    <ul className="nav nav-tabs">
                        <li className="nav-item" onClick={() => handleTabClick('stats')}>
                            <a className={`nav-link text-warning ${activeTab === 'stats' ? 'active' : ''}`} aria-current="page" href="#">Stats</a>
                        </li>
                        <li className="nav-item" onClick={() => handleTabClick('resistences')}>
                            <a className={`nav-link text-warning ${activeTab === 'resistences' ? 'active' : ''}`} href="#">Résistances</a>
                        </li>
                        { pokemon.apiResistancesWithAbilities.length > 0 &&
                            <li className="nav-item" onClick={() => handleTabClick('resistencesAbilities')}>
                                <a className={`nav-link text-warning ${activeTab === 'resistencesAbilities' ? 'active' : ''}`} href="#">Résistances avec capacités</a>
                            </li>
                        }
                    </ul>

                    <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemon.pokedexId}.gif`}
                    height={'75px'}
                    alt={ pokemon.name }
                        title={ pokemon.name } />

                    { activeTab === 'stats' &&
                        <PokemonStats stats={pokemon.stats} />
                    }

                    { activeTab === 'resistences' &&
                        <PokemonResistences resistences={pokemon.apiResistances} />
                    }

                    { activeTab === 'resistencesAbilities' &&
                        <PokemonResistences resistences={pokemon.apiResistancesWithAbilities} />
                    }

                    </div>
                </div>
            </div>
        )}
    </>);
}
