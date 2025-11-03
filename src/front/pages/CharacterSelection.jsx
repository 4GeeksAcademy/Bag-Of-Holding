import { useState, useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/characterSelection.css";

export const CharacterSelection = () => {
    const { store, dispatch } = useGlobalReducer()
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [characterList, setCharacterList] = useState([]);
    const navigate = useNavigate();

    const getCharacters = async () => {
        const response = await fetch(backendUrl + "api/user/" + store.user_id + "/characters");
        const data = await response.json();
        setCharacterList(data.characters);
    };
    const chooseCharacter = (character) => {
        dispatch({
            type: "select_character",
            payload: character
        });
        console.log(character)
        navigate("/character");
    }

    useEffect(() => {
        getCharacters()
    }, [])

    return (
        <div className="info-box m-5">
            <div className="text-center">
                <label className="input-selector mt-3">SELECT A CHARACTER</label>
            </div>
            <div className="character-list mt-3">
                {
                    characterList
                        ? characterList.map((character, index) => {
                            return (
                                <div key={index}>
                                    <button className="input-selection" onClick={() => chooseCharacter(character)}>{character.name}</button>
                                </div>
                            )
                        })
                        : ""
                }
                <div>
                    <button className="input-selection" onClick={() => navigate("/charactercreator")}>CREATE NEW</button>
                </div>
            </div>
        </div>
    );
}; 