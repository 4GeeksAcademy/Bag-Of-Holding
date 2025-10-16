import useGlobalReducer from "../../hooks/useGlobalReducer.jsx";

export const RaceSelector = ({ setCharacterRace }) => {
    const { store, dispatch } = useGlobalReducer()
    return (
        <div>
            <label className="input-selector mt-3" htmlFor="name">SELECT A RACE</label>
            <div className="grid-selector-input mt-3">
                {
                    store.races
                        ? store.races.map((race, index) => {
                            return (
                                <div key={index} >
                                    <button className="input-selection" onClick={() => setCharacterRace(race.name)}>{race.name}</button>
                                </div>
                            )
                        })
                        : ""
                }
            </div>
        </div>
    );
};