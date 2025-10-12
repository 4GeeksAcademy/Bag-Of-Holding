export const NameSelector = ({ setCharacterName , characterName}) => {
    return (
        <div>
            <label className="input-selector mt-5" htmlFor="name">ENTER CHARACTER NAME</label>
            <br></br>
            <input className="input-field m-5 accent" type="text" id="name" name="name" onChange={e => setCharacterName(e.target.value)} value={characterName} />
        </div>
    );
};