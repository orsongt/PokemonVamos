import { usePokemonResistencesHooks } from "./PokemonResistences.hooks";
import { TResistencesProps } from "./PokemonResistences.types";

import './PokemonResistences.css';

export const PokemonResistences = (resistences: TResistencesProps) => {
    const { getTypeImagePokemon, typePokemon } = usePokemonResistencesHooks(resistences);

    return (
        <div className="card-body resistences">
            <h5 className="card-title">Resistences</h5>
            <div className="card-text">
                <div className="container">
                <div className="row row-cols-3">
                    { resistences.resistences && resistences.resistences.map(
                        (resistance: {name: string, damage_multiplier: number, damage_relation: string}) => (
                        <span title={ resistance.name } key={resistance.name}>
                            <span className="badge bg-info" title={resistance.name}>
                                { typePokemon && (
                                    <>
                                        {getTypeImagePokemon(resistance.name)}
                                    </>
                                )}
                                &nbsp; { resistance.name }
                            </span>
                            <br />
                            <small style={{ fontSize: '10px', fontWeight: 'bold' }} title="Damage Multiplier">
                                DM {resistance.damage_multiplier}
                            </small>
                            <br />
                            <small style={{ fontSize: '10px', fontWeight: 'bold' }} title="Damage Relation">
                                DR {resistance.damage_relation}
                            </small>
                        </span>
                        )
                    )
                    }
                </div>
                </div>  
            </div>
        </div>
    );
}
