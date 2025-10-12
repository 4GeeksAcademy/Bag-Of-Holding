import { SpellsBlock } from "../components/SpellsBlock.jsx";
import { useState } from "react";
import { SpellBasicInfo } from "../components/SpellBasicInfo.jsx";
import { SpellBonusInfo } from "../components/SpellBonusInfo.jsx";

export const SpellList = () => {
    const [spellSelected, setSpellSelected] = useState({})
    const levelsTop = [0, 1, 2, 3, 4]
    const levelsBottom = [5, 6, 7, 8, 9]
    const deselect = () => {
        setSpellSelected({});
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
                <SpellBasicInfo spell={spellSelected} />
                {
                    spellSelected.desc
                        ? <SpellBonusInfo info={spellSelected.desc} type="Description" />
                        : ""
                }
                {
                    spellSelected.higher_level
                        ? <SpellBonusInfo info={spellSelected.higher_level} type="Higher Level" />
                        : ""
                }
                {
                    spellSelected.desc
                        ? <button className="spell-information-box m-3" onClick={deselect}>Close</button>
                        : ""
                }
            </div>

        </div>
    );
}; 