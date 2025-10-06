export const SkillsTable = (props) => {
    let rows = []
    let skills = props.skillList
    for (let i = 0; i < skills.length; i += 2) {
        rows.push(skills.slice(i, i + 2))
    }
    return (
        <div>
            <table className="">
                <tbody>
                    {rows.map((pair, index) => (
                        <tr key={index}>
                            <td>
                                <p className="float-start">
                                    <strong>{pair[0].name}</strong>
                                </p>
                                <p className="float-end mx-2">
                                    ({pair[0].ability})
                                </p>
                            </td>
                            <td>
                                <p className="float-start">
                                    <strong>{pair[1].name}</strong>
                                </p>
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