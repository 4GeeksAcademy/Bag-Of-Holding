export const CharacterInfoBlock = (props) => {
    let details = props.details
    return (
        //  ALL THIS INFORMATION IS SUPPOSED TO BE SELECTED USING THE DND API WITH ALL CHARACTER OPTIONS
        <div>
            {/* CHARACTER PICTURE */}
            <img src="https://i.pinimg.com/236x/aa/00/72/aa0072133c6bb0e1d968052509292a89.jpg" className="character-picture m-3"></img>

            {/* CHARACTER NAME */}
            <div className="character-info-box m-3">
                <h5>{details.name}</h5>
            </div>

            {/* CHARACTER RACE */}
            <div className="character-info-box m-3">
                <h5>{details.race}</h5>
            </div>

            {/* CHARACTER CLASS */}
            <div className="character-info-box m-3">
                <h5>LVL {details.level} - {details.class}</h5>
            </div>

            {/* CHARACTER SUBCLASS */}
            <div className="character-info-box m-3">
                <h5>{details.subclass}</h5>
            </div>
            {/* CHARACTER HP/AC/HITDICE*/}
            <div className="d-flex">
                <div className="character-info-box mx-3 p-2 w-25">
                    <h5>HP:</h5><h5>{details.hp}</h5>
                </div>
                <div className="character-info-box mx-3 p-2 w-25">
                    <h5>AC:</h5><h5>{details.ac}</h5>
                </div>
                <div className="character-info-box mx-3 p-2 w-25">
                    <h5>HitDice:</h5><h5>{details.hitDice}</h5>
                </div>
            </div>
        </div>
    )
};