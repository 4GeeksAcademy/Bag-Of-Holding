import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const SpellsBlock = (props) => {
    const { store, dispatch } = useGlobalReducer()

    const getSpellsByLevel = () => {
        return store.spells.filter(spell => spell.level == props.lvl);
    }

    const setTitle = () => {
        switch (props.lvl) {
            case 0:
                return "CANTRIPS";
            default:
                return "LEVEL " + props.lvl;
        }
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
                    props.setSpellSelected(data);
                }
            )
    }

    return (
        <div className="info-box spells-box m-3">
            <h2 className="stat-block-info">{setTitle()}</h2>
            <div className="spells-options">
                {
                    store.spells
                        ? getSpellsByLevel().map((spell, index) => {
                            return (
                                <div key={index} >
                                    <h4
                                        className="input-selection"
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