export const SkillsTable = (props) => {
    let rows = []
    let skills = props.skillList
    // SEPARATES SKILLS IN PAIRS TO SHOW IN 2 COLUMNS
    for (let i = 0; i < skills.length; i += 2) {
        rows.push(skills.slice(i, i + 2))
    }
    return (
        <div>
            <table className="">
                <tbody>
                    {rows.map((pair, index) => (
                        // IN EACH ROW WE SHOW THE SKILL NAME AND THE ABILITY IT BRANCES FROM
                        <tr key={index}>
                            {/* SKILL 1 OF THE PAIR */}
                            <td>
                                <p>
                                    <strong>{pair[0].name}</strong>
                                </p>
                            </td>
                            <td>
                                <p className="float-end mx-2">
                                    ({pair[0].ability})
                                </p>
                            </td>
                            {/* SKILL 2 OF THE PAIR */}
                            <td>
                                <p>
                                    <strong>{pair[1].name}</strong>
                                </p>
                            </td>
                            <td>
                                <p className="float-end mx-2">
                                    ({pair[1].ability})
                                </p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};