import useGlobalReducer from "../../hooks/useGlobalReducer";
import { useState } from "react";
export const StatBlock = (props) => {
    const { store, dispatch } = useGlobalReducer()
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [statValue, setStatValue] = useState(props.value);
    const check = (Math.floor((statValue - 10) / 2))
    const saving = props.proficient ? check + props.proficiency : check

    const updateStats = (value) => {
        const updatedStats = props.stats.map(stat => stat.name === props.name ? { ...stat, value: parseInt(value) } : stat);
        dispatch({
            type: "update_stats",
            payload: {
                stats: updatedStats
            }
        });
        updateStat(parseInt(value));
    }

    const updateStat = async (value) => {
        const response = await fetch(backendUrl + "api/stat", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "id": props.id,
                "value": value
            }),
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
    };

    return (
        <div className="stat-block-box">
            <div className="stat-block-info m-1 p-1 mt-2">
                <h4>{props.name}</h4>
            </div>
            <div className="stat-block-info m-1 p-1">
                <input
                    type="number"
                    className="character-info-input no-spinner"
                    onChange={e => {
                        setStatValue(e.target.value);
                        updateStats(e.target.value);
                    }}
                    value={statValue}
                />
            </div>
            <div className="d-flex justify-content-center m-1">
                <div className="stat-block-info me-1 text-center">
                    <label htmlFor="check">CHK</label>
                    <h4 id="check">{check}</h4>
                </div>
                <div className="stat-block-info ms-1 text-center">
                    <label htmlFor="saving">SAV</label>
                    <h4 id="saving">{saving}</h4>
                </div>
            </div>
        </div>
    );
};