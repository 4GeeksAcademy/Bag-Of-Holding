import React, { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Character = () => {

    const { store, dispatch } = useGlobalReducer()

    useEffect(() => {
    }, [])

    return (
        <div className="text-white mt-5 row">
            <div className="col-3 info-box rounded m-4">

                {/* ALL THIS INFORMATION IS SUPPOSED TO BE SELECTED USING THE DND API WITH ALL CHARACTER OPTIONS */}
                
                {/* CHARACTER PICTURE */}
                <img src="https://i.pinimg.com/236x/aa/00/72/aa0072133c6bb0e1d968052509292a89.jpg" className="character-picture m-3"></img>

                {/* CHARACTER NAME */}
                <div className="character-info-box rounded m-3"> 
                    <h5>MALEKITH THE WICKED</h5>
                </div>

                {/* CHARACTER RACE */}
                <div className="character-info-box rounded m-3"> 
                    <h5>HIGH ELF</h5>
                </div>

                {/* CHARACTER CLASS */}
                <div className="character-info-box rounded m-3"> 
                    <h5>WIZARD</h5>
                </div>

                {/* CHARACTER SUBCLASS */}
                <div className="character-info-box rounded m-3"> 
                    <h5>RUNECRAFTER</h5> 
                </div>
            </div>
            <div className="col-6">
                <div className="row info-box rounded h-50 mb-4">
                    <h3>CHARACTER STATS</h3>
                </div>
                <div className="row h-50">
                    <div className="col-6 info-box rounded me-4">
                        <h3>CHARACTER SKILLS</h3>
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