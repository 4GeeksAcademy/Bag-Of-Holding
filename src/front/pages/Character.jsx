import React, { useState, useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CharacterInfoBlock } from "../components/characterSite/CharacterInfoBlock.jsx";
import { CharacterStatsBlock } from "../components/characterSite/CharacterStatsBlock.jsx";
import { SkillsTable } from "../components/characterSite/SkillsTable.jsx";
import { ConsumablesTable } from "../components/characterSite/ConsumablesTable.jsx";
import { DiceBar } from "../components/characterSite/DiceBar.jsx";
import "../../styles/characterSite.css";
export const Character = () => {
    const { store, dispatch } = useGlobalReducer()
    let characterInfo = store.characterInfo

    const [charactersFromAPI, setCharactersFromAPI] = useState([]);

    // GET characters from API and save them to a store.js variable
    const getCharacters = async () => {
        const resp = await fetch(store.apiURL + "/monsters");
        const data = await resp.json();
        setCharactersFromAPI(data.results);
        store.characters.length == 0 &&
            dispatch({
                type: "set_characters",
                payload: [charactersFromAPI]
            })
        console.log("Characters in store.js:", store.characters)
    };

    useEffect(() => {
        console.log("characters saved from GET into useState: ", charactersFromAPI)
        getCharacters();
    }, [])

    return (
        <div className="text-white my-5 row">
            {/* BLOCK CONTAINING ALL CHARACTER DETAILS */}
            <div className="col-3 info-box rounded m-4">
                <CharacterInfoBlock details={characterInfo.details}></CharacterInfoBlock>
            </div>
            <div className="col-6">
                {/* BLOCK CONTAINING ALL CHARACTER STATS */}
                <div className="row info-box rounded py-3 mb-4">
                    <CharacterStatsBlock
                        stats={characterInfo.stats}
                        speed={characterInfo.speed}
                        initiative={characterInfo.initiative}
                        proficiency={characterInfo.proficiency}
                        passiveWIS={characterInfo.passiveWIS}
                    >
                    </CharacterStatsBlock>
                </div>
                <div className="d-flex">
                    {/* BLOCK CONTAINING ALL CHARACTER SKILLS */}
                    <div className="info-box rounded me-4">
                        <h3>SKILLS</h3>
                        {
                            characterInfo.skills
                                ? <SkillsTable skillList={characterInfo.skills}></SkillsTable>
                                : ""
                        }
                    </div>
                    {/* BLOCK CONTAINING ALL CONSUMABLES */}
                    <div className="col-5 info-box rounded">
                        <ConsumablesTable consumables={characterInfo.consumables} ></ConsumablesTable>
                    </div>
                </div>
            </div>
            {/* BLOCK CONTAINING ALL DICE */}
            <div className="col-2 info-box rounded m-4 justify-content-center">
                <DiceBar></DiceBar>
            </div>
        </div>
    );
}; 