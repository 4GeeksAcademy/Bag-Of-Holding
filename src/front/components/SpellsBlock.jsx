import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const SpellsBlock = (props) => {
    const { store, dispatch } = useGlobalReducer()

    // Gets list of all spells of the level passed as prop
    const getSpellsByLevel = () => {
        return store.spells.filter(spell => spell.level == props.lvl);
    }

    // Fetch Selected Spell Information
    const getSpellInfo = (url) => {
        fetch(url)
            .then(
                (spellInfo) => {
                    return spellInfo.json();
                }
            )
            .then(
                (data) => {
                    // Pass information to SpellList.jsx through UseState
                    props.setSpellSelected(data);
                }
            )
    }

    return (
        <div className="info-box spells-box m-3">
            <h2 className="stat-block-info">{props.lvl == 0 ? "CANTRIPS" : "LEVEL " + props.lvl}</h2>
            <div className="spells-options">
                {
                    store.spells
                        ? getSpellsByLevel().map((spell, index) => {
                            return (
                                <div key={index} >
                                    <h4
                                        className="border-bottom"
                                        onClick={() => getSpellInfo(store.apiURL + "/spells/" + spell.index)}
                                    >{spell.name}</h4>
                                </div>
                            )
                        })
                        : ""
                }
            </div>
        </div>
    )
};