import { useState, useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useNavigate } from "react-router-dom";
import { NameSelector } from "../components/characterCreation/NameSelector.jsx";
import { RaceSelector } from "../components/characterCreation/RaceSelector.jsx";
import { ClassSelector } from "../components/characterCreation/ClassSelector.jsx";
import { SubclassSelector } from "../components/characterCreation/SubclassSelector.jsx";
import { skillLevels } from "../store.js"
import "../../styles/characterCreator.css";

export const CharacterCreator = () => {
    const { store, dispatch } = useGlobalReducer()
    const [selectedInput, setSelectedInput] = useState("NAME")
    const [characterName, setCharacterName] = useState("")
    const [characterRace, setCharacterRace] = useState("")
    const [characterClass, setCharacterClass] = useState("")
    const [characterSubClass, setCharacterSubClass] = useState("")
    const navigate = useNavigate();
    const [showAlert, setsShowAlert] = useState(false)

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

    // GET character skill levels from API based on current character name in store.characterInfo
    const getCharacterSkills = async () => {
        const resp = await fetch(store.apiURL + "/monsters/" + { characterName });
        const data = await resp.json();
        skillLevels.str = data.strength;
        skillLevels.dex = data.dexterity;
        skillLevels.con = data.constitution;
        skillLevels.int = data.intelligence;
        skillLevels.wis = data.wisdom;
        skillLevels.cha = data.charisma;
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
            store.characterInfo.details.name !== "Name" && getCharacterSkills();
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