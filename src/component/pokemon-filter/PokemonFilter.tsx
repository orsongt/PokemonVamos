import { TypePokemon } from "../../models";
import { usePokemonFilterHooks } from "./PokemonFilter.hooks";

export const PokemonFilter = () => {
    const { accordionNameActive, handleAccordionClick, generations, typePokemon, getTypePokemon, getGenerationPokemon } = usePokemonFilterHooks();

    return (
        <div className="container">
            <div className="row opacity-75 accordion accordion-flush" id="accordionFlushExample">
                <div className="col-sm-12 col-lg-12 col-xl-6 accordion-item">
                    <h2 className="accordion-header">
                    <button
                        className={`accordion-button ${accordionNameActive === 'showGeneration' ? '' : 'collapsed'}`}
                        type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                        onClick={() => handleAccordionClick('showGeneration')}>
                        Recherche par Generation
                    </button>
                    </h2>
                    <div
                        id="flush-collapseOne"
                        className={`accordion-collapse collapse ${accordionNameActive === 'showGeneration' ? 'show' : ''}`}
                        data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <div className="row">
                            {   generations && generations.map(
                                (generation: number) => (
                                    <span className="col-3" key={generation} title={`${generation}° Generation`}>
                                        <input type="radio" className="btn-check" name="options-base" id={`generation-${generation}`} autoComplete="off" onClick={() => getGenerationPokemon(generation)} />
                                        <label className="btn" htmlFor={`generation-${generation}`}>{generation}</label>
                                    </span>
                                )
                            )
                            }
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-sm-12 col-lg-12 col-xl-6 accordion-item">
                    <h2 className="accordion-header">
                    <button
                        className={`accordion-button ${accordionNameActive === 'showTypes' ? '' : 'collapsed'}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                        onClick={() => handleAccordionClick('showTypes')}>
                        Recherche par Type
                    </button>
                    </h2>
                    <div
                        id="flush-collapseOne"
                        className={`accordion-collapse collapse ${accordionNameActive === 'showTypes' ? 'show' : ''}`}
                        data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <div className="row col">
                            { typePokemon && typePokemon.map(
                                (typePokemon: TypePokemon) => (
                                    <div className="col-2" title={typePokemon.name} key={typePokemon.id}>
                                        <input type="radio" className="btn-check" name="options-base" id={`${typePokemon.id}`} autoComplete="off" onClick={() => getTypePokemon(typePokemon.name)} />
                                        <label className="btn" htmlFor={`${typePokemon.id}`}>
                                        <img src={typePokemon.image} width="15px" alt={typePokemon.name} title={typePokemon.name} />
                                        </label>
                                    </div>
                                )
                            )
                            }
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
