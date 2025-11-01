import { useState, useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/characterCreator.css";

export const CharacterSelection = () => {
    const { store, dispatch } = useGlobalReducer()
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const navigate = useNavigate();

    const getCharacters = async () => {
        const response = await fetch(backendUrl + "api/user/" + store.user_id + "/characters");
        console.log(response);
        const data = await response.json();
        console.log(data);
    };

    useEffect(() => {
        getCharacters()
    }, [])

    return (
        <div className="text-center mt-5">
            <div className="info-box m-5">
                CHOOSE YOUR FIGHTER
            </div>
        </div>
    );
}; 