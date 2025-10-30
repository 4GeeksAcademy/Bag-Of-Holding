import React, { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CharacterInfoBlock } from "../components/characterSite/CharacterInfoBlock.jsx";
import { CharacterStatsBlock } from "../components/characterSite/CharacterStatsBlock.jsx";
import { SkillsTable } from "../components/characterSite/SkillsTable.jsx";
import { ConsumablesTable } from "../components/characterSite/ConsumablesTable.jsx";
import { DiceBar } from "../components/characterSite/DiceBar.jsx";
import "../../styles/characterSite.css";
export const Character = () => {
    const { store, dispatch } = useGlobalReducer()
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    let characterInfo = store.characterInfo

    const saveCharacter = async (e) => {
        console.log(characterInfo)
        const response = await fetch(backendUrl + "api/character", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(characterInfo),
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
    };
    useEffect(() => {
    }, [])

    return (
        <div className="text-white my-5 row">
            {/* BLOCK CONTAINING ALL CHARACTER DETAILS */}
            <div className="col-3 info-box rounded m-4">
                <CharacterInfoBlock
                    name={characterInfo.name}
                    race={characterInfo.race}
                    level={characterInfo.level}
                    characterClass={characterInfo.characterClass}
                    subclass={characterInfo.subclass}
                    hp={characterInfo.hp}
                    ac={characterInfo.ac}
                    hitDice={characterInfo.hp}
                />
            </div>
            <div className="col-6">
                {/* BLOCK CONTAINING ALL CHARACTER STATS */}
                <div className="row info-box rounded py-3 mb-4">
                    <CharacterStatsBlock
                        stats={characterInfo.stats}
                        speed={characterInfo.speed}
                        initiative={characterInfo.initiative}
                        proficiency={characterInfo.proficiency}
                    />
                </div>
                <div className="d-flex">
                    {/* BLOCK CONTAINING ALL CHARACTER SKILLS */}
                    <div className="info-box rounded me-4">
                        <h3>SKILLS</h3>
                        {
                            characterInfo.skills
                                ? <SkillsTable skillList={characterInfo.skills} stats={characterInfo.stats} proficiency={characterInfo.proficiency}></SkillsTable>
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
            <div className="col-2 h-75 info-box rounded m-4 justify-content-center">
                <DiceBar />
            </div>
            <button onClick={saveCharacter}>Save Character</button>
        </div>
    );
}; 