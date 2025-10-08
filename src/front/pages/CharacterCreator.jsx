import React, { useEffect, useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

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
                    <div>
                        <label className="input-selector mt-5" htmlFor="name">ENTER CHARACTER NAME</label>
                        <br></br>
                        <input className="input-field m-5 accent" type="text" id="name" name="name" onChange={e => setCharacterName(e.target.value)} value={characterName} />
                    </div>
                )
            //A Map of all available races
            case "RACE":
                return (
                    <div>
                        <label className="input-selector mt-3" htmlFor="name">SELECT A RACE</label>
                        <div className="race-selector-input mt-3">
                            {
                                store.races
                                    ? store.races.map((race, index) => {
                                        return (
                                            <div key={index} >
                                                <button className="input-selection" onClick={() => setCharacterRace(race.name)}>{race.name}</button>
                                            </div>
                                        )
                                    })
                                    : ""
                            }
                        </div>
                    </div>
                )
            //A Map of all available classes
            case "CLASS":
                return (
                    <div>
                        <label className="input-selector mt-3" htmlFor="name">SELECT A RACE</label>
                        <div className="race-selector-input mt-3">
                            {
                                store.classes
                                    ? store.classes.map((characterClass, index) => {
                                        return (
                                            <div key={index}>
                                                <button className="input-selection" onClick={() => setCharacterClass(characterClass.name)}>{characterClass.name}</button>
                                            </div>
                                        )
                                    })
                                    : ""
                            }
                        </div>
                    </div>
                )
            //A Map of all available subclasses
            case "SUBCLASS":
                return (
                    <div>
                        <label className="input-selector mt-3" htmlFor="name">SELECT A RACE</label>
                        <div className="race-selector-input mt-3">
                            {
                                store.subclasses.map((subClass, index) => {
                                    return (
                                        <div key={index}>
                                            <button className="input-selection" onClick={() => setCharacterSubClass(subClass.name)}>{subClass.name}</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
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