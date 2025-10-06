import React, { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { StatBlock } from "../components/StatBlock.jsx";
import { SkillsTable } from "../components/SkillsTable.jsx";

export const Character = () => {
    const characterInfo = {
        stats : [
            {
                name: "STR",
                value: 12,
                check: 1,
                saving: 4,
                proficient: true
            },
            {
                name: "DEX",
                value: 14,
                check: 2,
                saving: 2,
                proficient: false
            },
            {
                name: "CON",
                value: 18,
                check: 4,
                saving: 7,
                proficient: false
            },
            {
                name: "INT",
                value: 10,
                check: 0,
                saving: 3,
                proficient: false
            },
            {
                name: "WIS",
                value: 18,
                check: 1,
                saving: 7,
                proficient: false
            },
            {
                name: "CHA",
                value: 10,
                check: 0,
                saving: 0,
                proficient: false
            }

        ],
        skills: [
            {
                name: "ATHLETICS",
                ability: "STR",
                proficient: false,
                expert: false
            },
            {
                name: "ACROBATICS",
                ability: "DEX",
                proficient: false,
                expert: false
            },
            {
                name: "SLEIGHT OF HAND",
                ability: "DEX",
                proficient: false,
                expert: false
            },
            {
                name: "STEALTH",
                ability: "DEX",
                proficient: false,
                expert: false
            },
            {
                name: "ARCANA",
                ability: "INT",
                proficient: false,
                expert: false
            },
            {
                name: "HISTORY",
                ability: "INT",
                proficient: false,
                expert: false
            },
            {
                name: "INVESTIGATION",
                ability: "INT",
                proficient: false,
                expert: false
            },
            {
                name: "NATURE",
                ability: "INT",
                proficient: false,
                expert: false
            },
            {
                name: "RELIGION",
                ability: "INT",
                proficient: false,
                expert: false
            },
            {
                name: "ANIMAL HANDLING",
                ability: "WIS",
                proficient: false,
                expert: false
            },
            {
                name: "INSIGHT",
                ability: "WIS",
                proficient: false,
                expert: false
            },
            {
                name: "MEDICINE",
                ability: "WIS",
                proficient: false,
                expert: false
            },
            {
                name: "PERCEPTION",
                ability: "WIS",
                proficient: false,
                expert: false
            },
            {
                name: "SURVIVAL",
                ability: "WIS",
                proficient: false,
                expert: false
            },
            {
                name: "DECEPTION",
                ability: "CHA",
                proficient: false,
                expert: false
            },
            {
                name: "INTIMIDATION",
                ability: "CHA",
                proficient: false,
                expert: false
            },
            {
                name: "PERFORMANCE",
                ability: "CHA",
                proficient: false,
                expert: false
            },
            {
                name: "PERSUASION",
                ability: "CHA",
                proficient: false,
                expert: false
            }
        ],
        speed:30,
        initiative:2,
        proficiency:3,
        passiveWIS:30

    }
    const { store, dispatch } = useGlobalReducer()

    useEffect(() => {
    }, [])

    return (
        <div className="text-white my-5 row">
            <div className="col-3 info-box rounded m-4">

                {/* ALL THIS INFORMATION IS SUPPOSED TO BE SELECTED USING THE DND API WITH ALL CHARACTER OPTIONS */}

                {/* CHARACTER PICTURE */}
                <img src="https://i.pinimg.com/236x/aa/00/72/aa0072133c6bb0e1d968052509292a89.jpg" className="character-picture m-3"></img>

                {/* CHARACTER NAME */}
                <div className="character-info-box m-3">
                    <h5>MALEKITH THE WICKED</h5>
                </div>

                {/* CHARACTER RACE */}
                <div className="character-info-box m-3">
                    <h5>HIGH ELF</h5>
                </div>

                {/* CHARACTER CLASS */}
                <div className="character-info-box m-3">
                    <h5>WIZARD</h5>
                </div>

                {/* CHARACTER SUBCLASS */}
                <div className="character-info-box m-3">
                    <h5>RUNECRAFTER</h5>
                </div>
            </div>
            <div className="col-6">
                <div className="row info-box rounded py-3 mb-4">
                    {/* MAP OF A LIST CONTAINING THE INFORMATION ON ALL STATS*/}
                    <div className="row m-auto">
                        {
                            characterInfo.stats
                                ? characterInfo.stats.map((stat, index) => {
                                    return (
                                        <div className="col-2" key={index}>
                                            <StatBlock name={stat.name} value={stat.value} check={stat.check} saving={stat.saving} />
                                        </div>
                                    )
                                })
                                : ""
                        }
                    </div>
                    <div className="d-flex mt-3">
                        <div className="stat-block-box w-25 m-1">
                            <h4 className="stat-block-info m-1">SPEED</h4>
                            <h4 className="stat-block-info m-1">{characterInfo.speed}</h4>
                        </div>
                        <div className="stat-block-box w-25 m-1">
                            <h4 className="stat-block-info m-1">INITIATIVE</h4>
                            <h4 className="stat-block-info m-1">{characterInfo.initiative}</h4>
                        </div>
                        <div className=" stat-block-box w-25 m-1">
                            <h4 className="stat-block-info m-1">PROFICIENCY</h4>
                            <h4 className="stat-block-info m-1">{characterInfo.proficiency}</h4>
                        </div>
                        <div className=" stat-block-box w-25 m-1">
                            <h4 className="stat-block-info m-1">PASSIVE WIS</h4>
                            <h4 className="stat-block-info m-1">{characterInfo.passiveWIS}</h4>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="info-box rounded me-4">
                        <h3>CHARACTER SKILLS</h3>
                        {
                            characterInfo.skills
                                ? <SkillsTable skillList={characterInfo.skills}></SkillsTable>
                                : ""
                        }
                    </div>
                    <div className="col-5 info-box rounded">
                        <h3>CONSUMABLES</h3>
                    </div>
                </div>
            </div>
            <div className="col-2 info-box rounded m-4">
                DICE BAR
            </div>
        </div>
    );
}; 