import { StatBlock } from "./StatBlock";
export const CharacterStatsBlock = (props) => {
    return (
        <div>
            <div className="row m-auto">
                {
                    /* MAP OF A LIST CONTAINING THE INFORMATION ON ALL STATS*/
                    props.stats
                        ? props.stats.map((stat, index) => {
                            return (
                                <div className="col-2" key={index}>
                                    <StatBlock name={stat.name} value={stat.value} check={stat.check} saving={stat.saving} />
                                </div>
                            )
                        })
                        : ""
                }
            </div>
            <div className="d-flex mt-3">
                <div className="stat-block-box w-25 m-1">
                    <h4 className="stat-block-info m-1">SPEED</h4>
                    <h4 className="stat-block-info m-1">{props.speed}</h4>
                </div>
                <div className="stat-block-box w-25 m-1">
                    <h4 className="stat-block-info m-1">INITIATIVE</h4>
                    <h4 className="stat-block-info m-1">{props.initiative}</h4>
                </div>
                <div className=" stat-block-box w-25 m-1">
                    <h4 className="stat-block-info m-1">PROFICIENCY</h4>
                    <h4 className="stat-block-info m-1">{props.proficiency}</h4>
                </div>
                <div className=" stat-block-box w-25 m-1">
                    <h4 className="stat-block-info m-1">PASSIVE WIS</h4>
                    <h4 className="stat-block-info m-1">{props.passiveWIS}</h4>
                </div>
            </div>
        </div>
    )
};

