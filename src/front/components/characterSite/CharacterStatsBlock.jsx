import { StatBlock } from "./StatBlock";
import useGlobalReducer from "../../hooks/useGlobalReducer";
import { useState } from "react";
export const CharacterStatsBlock = (props) => {
    const { store, dispatch } = useGlobalReducer()
    const [speed, setSpeed] = useState(props.speed)
    const [initiative, setInitiative] = useState(props.initiative)
    const [proficiency, setProficiency] = useState(props.proficiency)
    const [passiveWIS, setPassiveWIS] = useState(props.passiveWIS)
    const updateStats = () => {
        dispatch({
            type: "save_attributes",
            payload: {
                speed: speed,
                initiative: initiative,
                proficiency: proficiency
            },
        });
        console.log(store.characterInfo)
    }
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
                    <input
                        type="text"
                        className="stat-block-info m-1 "
                        maxLength="3"
                        onChange={e => setSpeed(e.target.value)}
                        onKeyDown={e => {
                            if (e.key == "Enter") {
                                updateStats();
                            }
                        }
                        }
                        value={speed}
                    />
                </div>
                <div className="stat-block-box w-25 m-1">
                    <h4 className="stat-block-info m-1">INITIATIVE</h4>
                    <input
                        type="text"
                        className="stat-block-info m-1 "
                        maxLength="2"
                        onChange={e => setInitiative(e.target.value)}
                        onKeyDown={e => {
                            if (e.key == "Enter") {
                                updateStats();
                            }
                        }
                        }
                        value={initiative}
                    />
                </div>
                <div className=" stat-block-box w-25 m-1">
                    <h4 className="stat-block-info m-1">PROFICIENCY</h4>
                    <input
                        type="text"
                        className="stat-block-info m-1 "
                        maxLength="2"
                        onChange={e => setProficiency(e.target.value)}
                        onKeyDown={e => {
                            if (e.key == "Enter") {
                                updateStats();
                            }
                        }
                        }
                        value={proficiency}
                    />
                </div>
                <div className=" stat-block-box w-25 m-1">
                    <h4 className="stat-block-info m-1">PASSIVE PER</h4>
                    <input type="text" className="stat-block-info m-1 " maxLength="2" onChange={e => setPassiveWIS(e.target.value)} value={passiveWIS} />
                </div>
            </div>
        </div>
    )
};

