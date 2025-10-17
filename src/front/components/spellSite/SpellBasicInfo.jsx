export const SpellBasicInfo = (props) => {
    if (props.spell.desc) {
        let spell = props.spell
        return (
            <div className="spell-information-box m-2">
                <table className="">
                    <tbody>
                        <tr>
                            <td><strong>Level:</strong> {spell.level}</td>
                            <td>Range: {spell.range}</td>
                        </tr>
                        <tr>
                            <td><strong>Components:</strong> {spell.components}</td>
                            <td><strong>Material:</strong> {spell.material}</td>
                        </tr>
                        <tr>
                            <td><strong>Ritual:</strong> {spell.ritual ? "YES" : "NO"}</td>
                            <td><strong>Duration:</strong> {spell.duration}</td>
                        </tr>
                        <tr>
                            <td><strong>Concentration:</strong> {spell.concentration ? "YES" : "NO"}</td>
                            <td><strong>Casting Time:</strong> {spell.casting_time}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    return ("")
}