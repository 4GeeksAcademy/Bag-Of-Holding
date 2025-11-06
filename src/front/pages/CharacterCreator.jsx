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
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [selectedInput, setSelectedInput] = useState("NAME")
    const [characterName, setCharacterName] = useState("")
    const [characterRace, setCharacterRace] = useState("")
    const [characterClass, setCharacterClass] = useState("")
    const [characterSubClass, setCharacterSubClass] = useState("")
    const navigate = useNavigate();
    const [showAlert, setsShowAlert] = useState(false)


    const saveCharacter = async (e) => {
        if (characterName && characterRace && characterClass && characterSubClass) {
            const response = await fetch(backendUrl + "api/character", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(
                    {
                        "user_id": store.user_id,
                        "name": characterName,
                        "race": characterRace,
                        "characterClass": characterClass,
                        "subClass": characterSubClass
                    }
                )
            });
            console.log(response);
            const data = await response.json();
            console.log(data);
            dispatch({
                type: "select_character",
                payload: data.character
            });
            navigate("/character");
        }
        else {
            setsShowAlert(true);
        }
    };

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
                    showAlert && (!characterName || !characterRace || !characterClass || !characterSubClass)
                        ? <div className="alert alert-danger" role="alert">
                            PLEASE ENTER ALL INFORMATION:<br />
                            <strong>{characterName ? "" : "| NAME |"}{characterRace ? "" : "| RACE |"}{characterClass ? "" : "| CLASS |"}{characterSubClass ? "" : "| SUBCLASS |"}</strong>
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