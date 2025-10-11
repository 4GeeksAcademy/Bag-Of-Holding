import { SpellsBlock } from "../components/SpellsBlock.jsx";
import { useState } from "react";

export const SpellList = () => {
    const [spellSelected, setSpellSelected] = useState({})
    const levelsTop = [0, 1, 2, 3, 4]
    const levelsBottom = [5, 6, 7, 8, 9]
    const showInfo = (spell) => {
        if (spell) {
            return (
                <p>
                    -Level:{spell.level}
                    - Range:{spell.range}
                    - Components:{spell.components}
                    - Material:{spell.material}
                    - Ritual:{spell.ritual ? "YES" : "NO"}
                    - Duration:{spell.duration}
                    - Concentration:{spell.concentration ? "YES" : "NO"}
                    - Casting Time:{spell.casting_time}
                    - Attack Type:{spell.attack_type}

                </p>
            )
        }
    }

    return (
        <div className="text-center text-white d-flex">
            <div>
                <div className=" d-flex">
                    {
                        levelsTop.map(
                            lvl => (
                                <SpellsBlock key={lvl} lvl={lvl} setSpellSelected={setSpellSelected} />
                            )
                        )
                    }
                </div>
                <div className=" d-flex">
                    {
                        levelsBottom.map(
                            lvl => (
                                <SpellsBlock key={lvl} lvl={lvl} setSpellSelected={setSpellSelected} />
                            )
                        )
                    }
                </div>
            </div>
            <div className="info-box m-3 w-25">
                <div>
                    <h2>
                        {
                            spellSelected.name
                                ? spellSelected.name
                                : "Select a spell"
                        }
                    </h2>
                </div>
                <div>
                    <p className="spell-information-box spell-bonus-info m-2">
                        {
                            spellSelected
                                ? showInfo
                                : ""
                        }
                    </p>
                </div>
                <div>
                    <h5>Description:</h5>
                    <p className="spell-information-box spell-description m-2">
                        {
                            spellSelected.desc
                                ? spellSelected.desc
                                : ""
                        }
                    </p>
                </div>
                {
                    spellSelected.higher_level
                        ? <div>
                            <h5>Higher level:</h5>
                            <p className="spell-information-box spell-bonus-info m-2">
                                {spellSelected.higher_level}
                            </p>
                        </div>
                        : ""
                }

            </div>

        </div>
    );
}; 