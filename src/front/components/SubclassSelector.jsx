import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const SubclassSelector = ({ setCharacterSubClass }) => {
    const { store, dispatch } = useGlobalReducer()
    return (
        <div>
            <label className="input-selector mt-3" htmlFor="name">SELECT A SUBCLASS</label>
            <div className="race-selector-input mt-3">
                {
                    store.subclasses.map((subClass, index) => {
                        return (
                            <div key={index}>
                                <button className="input-selection" onClick={() => setCharacterSubClass(subClass.name)}>{subClass.name}</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};