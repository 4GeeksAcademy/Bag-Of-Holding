export const ConsumablesTable = (props) => {
    return (
        <table className="mx-5 mt-3">
            <tbody>
                {
                    props.consumables
                        ? props.consumables.map((consumable, index) => (
                            <tr key={index}>
                                <td>
                                    <h5 className="float-start">
                                        <strong>{consumable.name}</strong>
                                    </h5>
                                </td>
                                <td>
                                    <h5 className="float-end mx-2">
                                        ({consumable.ammount})
                                    </h5>
                                </td>
                            </tr>
                        ))
                        : ""
                }
            </tbody>
        </table>
    )
};