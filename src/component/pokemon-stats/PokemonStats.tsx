import { TStatsProps } from './PokemonStats.types';

export const PokemonStats = (stats: TStatsProps) => {
    return (
        <div className="card-body bg-light opacity-75">
            <h5 className="card-title">Stats</h5>
            <div className="card-text">
                <div className="container text-center">
                <div className="row row-cols-3">
                    <div className="col">
                        <span className="badge bg-success" title='HP'>HP</span> <br />
                        {stats.stats.HP}
                    </div>
                    <div className="col">
                        <span className="badge bg-success" title='Attack'>Attack</span> <br />
                        {stats.stats.attack}
                    </div>
                    <div className="col">
                        <span className="badge bg-success" title='Defense'>Defense</span> <br />
                        {stats.stats.defense}
                    </div>
                    <div className="col">
                        <span className="badge bg-success" title='Special Attack'>Special Attack</span> <br />
                        {stats.stats.special_attack}
                    </div>
                    <div className="col">
                        <span className="badge bg-success" title='Special Defense'>Special Defense</span> <br />
                        {stats.stats.special_defense}
                    </div>
                    <div className="col">
                        <span className="badge bg-success" title='Vitesse'>Vitesse</span> <br />
                        {stats.stats.speed}
                    </div>
                </div>
                </div>  
            </div>
        </div>
    );
}
