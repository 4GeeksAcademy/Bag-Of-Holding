import useGlobalReducer from "../../hooks/useGlobalReducer";
import { useState } from "react";
export const CharacterInfoBlock = (props) => {
    const { store, dispatch } = useGlobalReducer();
    const [level, setLevel] = useState(props.level);
    const [hp, setHp] = useState(props.hp);
    const [ac, setAc] = useState(props.ac);
    const [hitDice, setHitDice] = useState(props.hitDice);
    const updateInfo = () => {
        dispatch({
            type: "update_info",
            payload: {
                level: parseInt(level),
                hp: parseInt(hp),
                ac: parseInt(ac),
                hitDice: hitDice
            },
        });
    }
    return (
        //  ALL THIS INFORMATION IS SUPPOSED TO BE SELECTED USING THE DND API WITH ALL CHARACTER OPTIONS
        <div>
            {/* CHARACTER PICTURE */}
            <img src="https://i.pinimg.com/236x/aa/00/72/aa0072133c6bb0e1d968052509292a89.jpg" className="character-picture m-3"></img>

            {/* CHARACTER NAME */}
            <div className="character-info-box m-3">
                <label htmlFor="name">NAME</label>
                <h5 id="name">{props.name}</h5>
            </div>

            {/* CHARACTER RACE */}
            <div className="character-info-box m-3">
                <label htmlFor="race">RACE</label>
                <h5 id="race">{props.race}</h5>
            </div>

            {/* CHARACTER LEVEL */}
            <div className="character-info-box m-3">
                <label htmlFor="level">LEVEL</label>
                <input
                    id="level"
                    type="number"
                    className="character-info-input no-spinner"
                    onChange={e => setLevel(e.target.value)}
                    onKeyDown={e => {
                        if (e.key == "Enter") {
                            updateInfo();
                        }
                    }
                    }
                    value={level}
                />
            </div>

            {/* CHARACTER CLASS */}
            <div className="character-info-box m-3">
                <label htmlFor="cClass">CLASS</label>
                <h5 id="cClass">{props.characterClass}</h5>
            </div>

            {/* CHARACTER SUBCLASS */}
            <div className="character-info-box m-3">
                <label htmlFor="subClass">SUBCLASS</label>
                <h5 id="subClass">{props.subClass}</h5>
            </div>
            {/* CHARACTER HP/AC/HITDICE*/}
            <div className="d-flex">
                <div className="character-info-box mx-3 p-2 w-25">
                    <label htmlFor="hp">HP</label>
                    <input
                        id="hp"
                        type="number"
                        className="character-info-input no-spinner"
                        onChange={e => setHp(e.target.value)}
                        onKeyDown={e => {
                            if (e.key == "Enter") {
                                updateInfo();
                            }
                        }
                        }
                        value={hp}
                    />
                </div>
                <div className="character-info-box mx-3 p-2 w-25">
                    <label htmlFor="ac">AC</label>
                    <input
                        id="ac"
                        type="number"
                        className="character-info-input no-spinner"
                        onChange={e => setAc(e.target.value)}
                        onKeyDown={e => {
                            if (e.key == "Enter") {
                                updateInfo();
                            }
                        }
                        }
                        value={ac}
                    />
                </div>
                <div className="character-info-box mx-3 p-2 w-25">
                    <label htmlFor="hitDice">HIT DICE</label>
                    <input
                        id="hitDice"
                        type="text"
                        className="character-info-input"
                        onChange={e => setHitDice(e.target.value)}
                        onKeyDown={e => {
                            if (e.key == "Enter") {
                                updateInfo();
                            }
                        }
                        }
                        value={hitDice}
                    />
                </div>
            </div>
        </div>
    )
};