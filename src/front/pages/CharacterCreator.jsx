import { useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { NameSelector } from "../components/NameSelector.jsx";
import { RaceSelector } from "../components/RaceSelector.jsx";
import { ClassSelector } from "../components/ClassSelector.jsx";
import { SubclassSelector } from "../components/SubclassSelector.jsx";

export const CharacterCreator = () => {
    const { store, dispatch } = useGlobalReducer()
    const [selectedInput, setSelectedInput] = useState("NAME")
    const [characterName, setCharacterName] = useState("")
    const [characterRace, setCharacterRace] = useState("")
    const [characterClass, setCharacterClass] = useState("")
    const [characterSubClass, setCharacterSubClass] = useState("")

    // Save all character information to store after hitting submit
    function saveCharacter() {
        if (characterName && characterRace && characterClass && characterSubClass) {
            dispatch({
                type: "save_character",
                payload: { name: characterName, race: characterRace, characterClass: characterClass, subclass: characterSubClass }
            });
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
                <div className="m-2">
                    {/* Buttons that toggle between character input sections */}
                    <button className="input-selector" onClick={() => setSelectedInput("NAME")}>{characterName ? characterName : "NAME"}</button>
                    <button className="input-selector" onClick={() => setSelectedInput("RACE")}>{characterRace ? characterRace : "RACE"}</button>
                    <button className="input-selector" onClick={() => setSelectedInput("CLASS")}>{characterClass ? characterClass : "CLASS"}</button>
                    <button className="input-selector" onClick={() => setSelectedInput("SUBCLASS")}>{characterSubClass ? characterSubClass : "SUBCLASS"}</button>
                    {/* Submit button automatically sends you to the character site for now */}
                    <Link to="/character">
                        <button className="input-selector" onClick={saveCharacter}>SUBMIT</button>
                    </Link>
                </div>
                <div className="my-3">
                    {inputSelection()}
                </div>
            </div>
        </div>
    );
}; 