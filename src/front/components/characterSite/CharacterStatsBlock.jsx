import { StatBlock } from "./StatBlock";
import useGlobalReducer from "../../hooks/useGlobalReducer";
import { useState, useEffect } from "react";
export const CharacterStatsBlock = (props) => {
    const { store, dispatch } = useGlobalReducer()
    const [speed, setSpeed] = useState(props.speed)
    const [initiative, setInitiative] = useState(props.initiative)
    const [proficiency, setProficiency] = useState(props.proficiency)
    const updateStats = () => {
        dispatch({
            type: "save_attributes",
            payload: {
                speed: parseInt(speed),
                initiative: parseInt(initiative),
                proficiency: parseInt(proficiency)
            },
        });
    }
    useEffect(() => {
    }, [])
    // We calculate passive Perception
    const wisdomStat = props.stats?.find(stat => stat.name === "WIS");
    const wisdomMod = wisdomStat ? (Math.floor((wisdomStat.value - 10) / 2)) : 0;
    const passivePer = 10 + wisdomMod + parseInt(props.proficiency)
    return (
        <div>
            <div className="row m-auto">
                {
                    /* MAP OF A LIST CONTAINING THE INFORMATION ON ALL STATS*/
                    props.stats
                        ? props.stats.map((stat, index) => {
                            return (
                                <div className="col-2" key={index}>
                                    <StatBlock name={stat.name} value={stat.value} proficiency={proficiency} stats={props.stats} />
                                </div>
                            )
                        })
                        : ""
                }
            </div>
            <div className="d-flex mt-3">
                <div className="stat-block-box w-25 m-1">
                    <h4 className="stat-block-info p-1">SPEED</h4>
                    <h4>
                        <input
                            type="number"
                            className="stat-block-info"
                            onChange={e => setSpeed(e.target.value)}
                            onKeyDown={e => {
                                if (e.key == "Enter") {
                                    updateStats();
                                }
                            }
                            }
                            value={speed}
                        />
                    </h4>
                </div>
                <div className="stat-block-box w-25 m-1">
                    <h4 className="stat-block-info p-1">INITIATIVE</h4>
                    <h4>
                        <input
                            type="number"
                            className="stat-block-info"
                            onChange={e => setInitiative(e.target.value)}
                            onKeyDown={e => {
                                if (e.key == "Enter") {
                                    updateStats();
                                }
                            }
                            }
                            value={initiative}
                        />
                    </h4>
                </div>
                <div className=" stat-block-box w-25 m-1">
                    <h4 className="stat-block-info p-1">PROFICIENCY</h4>
                    <h4>
                        <input
                            type="number"
                            className="stat-block-info"
                            onChange={e => setProficiency(e.target.value)}
                            onKeyDown={e => {
                                if (e.key == "Enter") {
                                    updateStats();
                                }
                            }
                            }
                            value={proficiency}
                        />
                    </h4>
                </div>
                <div className=" stat-block-box w-25 m-1">
                    <h4 className="stat-block-info p-1">PASSIVE PER</h4>
                    <h4 className="stat-block-info p-1">{passivePer}</h4>
                </div>
            </div>
        </div>
    )
};

