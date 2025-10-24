import useGlobalReducer from "../../hooks/useGlobalReducer";
export const SkillsTable = (props) => {
    const { store, dispatch } = useGlobalReducer();
    let rows = []
    let skills = props.skillList
    let stats = props.stats

    const skillValue = (ability, proficient, expert) => {
        stats = store.characterInfo.stats
        const abilityStat = stats.find(stat => stat.name === ability)
        const check = Math.floor((abilityStat.value - 10) / 2)
        if (expert) return (check + (props.proficiency * 2))
        if (proficient) return (check + props.proficiency)
        return (check)
    }

    // SEPARATES SKILLS IN PAIRS TO SHOW IN 2 COLUMNS
    for (let i = 0; i < skills.length; i += 2) {
        rows.push(skills.slice(i, i + 2))
    }
    return (
        <table className="">
            <tbody>
                {rows.map((pair, index) => (
                    // IN EACH ROW WE SHOW THE SKILL NAME AND THE ABILITY IT BRANCES FROM
                    <tr key={index}>
                        {/* SKILL 1 OF THE PAIR */}
                        <td>
                            <p>
                                <strong>{pair[0].name}</strong>{' '}({pair[0].ability})
                            </p>
                        </td>
                        <td>
                            <p className="float-end mx-2">
                                {skillValue(pair[0].ability, pair[0].proficient, pair[0].expert)}
                            </p>
                        </td>
                        {/* SKILL 2 OF THE PAIR */}
                        <td>
                            <p>
                                <strong>{pair[1].name}</strong>{' '}({pair[1].ability})
                            </p>
                        </td>
                        <td>
                            <p className="float-end mx-2">
                                {skillValue(pair[0].ability, pair[1].proficient, pair[1].expert)}
                            </p>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};