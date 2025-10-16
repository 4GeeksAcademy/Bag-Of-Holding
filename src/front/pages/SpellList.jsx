import { useState } from "react";
import { SpellsBlock } from "../components/spellSite/SpellsBlock.jsx";
import { SpellBasicInfo } from "../components/spellSite/SpellBasicInfo.jsx";
import { SpellBonusInfo } from "../components/spellSite/SpellBonusInfo.jsx";
import "../../styles/spellList.css";

export const SpellList = () => {
    const [spellSelected, setSpellSelected] = useState({})
    const levelsTop = [0, 1, 2, 3, 4]
    const levelsBottom = [5, 6, 7, 8, 9]
    const deselect = () => {
        setSpellSelected({});
    }

    return (
        <div className="text-center text-white d-flex">
            {/* SHOW ALL SPELL LEVELS SEPARATED IN 2 ROWS */}
            <div>
                {/* TOP ROW INCLUDES LEVELS FORM 0 TO 4 */}
                <div className="d-flex">
                    {
                        levelsTop.map(
                            lvl => (
                                <SpellsBlock key={lvl} lvl={lvl} setSpellSelected={setSpellSelected} />
                            )
                        )
                    }
                </div>
                {/* BOTTOM ROW INCLUDES LEVELS FORM 5 TO 9 */}
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
            {/* SPELL INFORMATION BOX */}
            <div className="info-box m-3 w-25">
                {/* NAME OF THE SPELL */}
                <div className="spell-name">
                    <h2>
                        {
                            spellSelected.name
                                ? spellSelected.name
                                : "Select a spell"
                        }
                    </h2>
                </div>
                {/* SPELL BASIC INFORMATION */}
                <SpellBasicInfo spell={spellSelected} />
                {/* SPELL DESCRIPTION */}
                {
                    spellSelected.desc
                        ? <SpellBonusInfo info={spellSelected.desc} type="Description" />
                        : ""
                }
                {/* SPELL HIGHER LEVEL CONDITIONS IF ANY */}
                {
                    spellSelected.higher_level
                        ? <SpellBonusInfo info={spellSelected.higher_level} type="Higher Level" />
                        : ""
                }
                {/* IF SHOWING A SPELL SHOWS A BUTTON TO "CLOSE" SPELL WHICH SIMPLY RESETS spellSelected to {} */}
                {
                    spellSelected.name
                        ? <button className="close-button m-3" onClick={deselect}>Close</button>
                        : ""
                }
            </div>

        </div>
    );
}; 