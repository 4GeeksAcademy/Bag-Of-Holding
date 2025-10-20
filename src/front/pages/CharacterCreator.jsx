import { useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useNavigate } from "react-router-dom";
import { NameSelector } from "../components/characterCreation/NameSelector.jsx";
import { RaceSelector } from "../components/characterCreation/RaceSelector.jsx";
import { ClassSelector } from "../components/characterCreation/ClassSelector.jsx";
import { SubclassSelector } from "../components/characterCreation/SubclassSelector.jsx";
import "../../styles/characterCreator.css";

export const CharacterCreator = () => {
    const { store, dispatch } = useGlobalReducer()
    const [selectedInput, setSelectedInput] = useState("NAME")
    const [characterName, setCharacterName] = useState("")
    const [characterRace, setCharacterRace] = useState("")
    const [characterClass, setCharacterClass] = useState("")
    const [characterSubClass, setCharacterSubClass] = useState("")

    const [skillName, setSkillName] = useState("")
    const [skillAbility, setSkillAbility] = useState("")
    const [skillProficiency, setSkillProficiency] = useState("")
    const [skillExpertise, setSkillExpertise] = useState("")

    const navigate = useNavigate();
    const [showAlert, setsShowAlert] = useState(false)

    // GET character info from API based on current character name in store.characterInfo
    const getCharacterInfo = async () => {
        const resp = await fetch(store.apiURL + "/monsters/" + { characterName });
        const data = await resp.json();
            dispatch({
                type: "set_skills",
                payload: {
                    name: skillName,
                    ability: skillAbility,
                    proficient: skillProficiency,
                    expert: skillExpertise
                }
            });
    };

    // Save all character information to store after hitting submit
    function saveCharacter() {
        if (characterName && characterRace && characterClass && characterSubClass) {
            console.log(characterName, characterRace, characterClass, characterSubClass)
            dispatch({
                type: "save_character",
                payload: { name: characterName, race: characterRace, characterClass: characterClass, subclass: characterSubClass }
            });
            store.characterInfo.details.name !== "Name" && setCharacterName(store.characterInfo.details.name)
            store.characterInfo.details.name !== "Name" && getCharacterInfo();
            navigate("/character");
        }
        else {
            setsShowAlert(true);
        }
    }
    //Toggles between sections for character creation
    const inputSelection = () => {
        switch (selectedInput) {
            //A basic input for NAME
            case "NAME":
                return (
                    <NameSelector setCharacterName={setCharacterName} characterName={characterName} />
                )
            //A Map of all available races
            case "RACE":
                return (
                    <RaceSelector setCharacterRace={setCharacterRace} />
                )
            //A Map of all available classes
            case "CLASS":
                return (
                    <ClassSelector setCharacterClass={setCharacterClass} />
                )
            //A Map of all available subclasses
            case "SUBCLASS":
                return (
                    <SubclassSelector setCharacterSubClass={setCharacterSubClass} />
                )
            default:
                return ""
        }
    }

    return (
        <div className="text-center mt-5">
            <div className="info-box m-5">
                {
                    showAlert
                        ? <div className="alert alert-danger" role="alert">
                            PLEASE ENTER ALL INFORMATION
                        </div>
                        : ""
                }
                <div className="m-2">
                    {/* Buttons that toggle between character input sections */}
                    <button className="input-selector" onClick={() => setSelectedInput("NAME")}>{characterName ? characterName : "NAME"}</button>
                    <button className="input-selector" onClick={() => setSelectedInput("RACE")}>{characterRace ? characterRace : "RACE"}</button>
                    <button className="input-selector" onClick={() => setSelectedInput("CLASS")}>{characterClass ? characterClass : "CLASS"}</button>
                    <button className="input-selector" onClick={() => setSelectedInput("SUBCLASS")}>{characterSubClass ? characterSubClass : "SUBCLASS"}</button>
                    {/* Submit button automatically sends you to the character site for now */}
                    <button className="input-selector" onClick={saveCharacter}>SUBMIT</button>
                </div>
                <div className="my-3">
                    {inputSelection()}
                </div>
            </div>
        </div>
    );
}; 