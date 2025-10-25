import { number } from "prop-types";
import useGlobalReducer from "../../hooks/useGlobalReducer";
import { useState } from "react";
export const ConsumablesTable = (props) => {
    const { store, dispatch } = useGlobalReducer();
    const [consumables, setConsumables] = useState(props.consumables)
    const [newConsumable, setNewConsumable] = useState("")

    const updateConsumable = (index, newAmount) => {
        setConsumables(prevConsumables => {
            // create a shallow copy of the array
            const updated = [...prevConsumables];
            if (index == consumables.length && newConsumable != ""){
                updated[index] = { name: newConsumable, amount: newAmount };
            }
            else {
                // create a new object for the updated item
                updated[index] = { ...updated[index], amount: newAmount };
            }

            return updated;
        });
        updateConsumablesList();
    }

    const updateConsumablesList = () => {
        dispatch({
            type: "update_consumables",
            payload: {
                consumables: consumables
            },
        });
    }

    return (
        <div className="d-flex">
            <table className="m-2">
                <tbody>
                    {
                        // Simply maps through an array of Consumables and lists the name and ammount left
                        consumables
                            ? consumables.map((consumable, index) => (
                                <tr key={index}>
                                    <td>
                                        <h5 className="float-start">
                                            <strong>{consumable.name}</strong>
                                        </h5>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            className="consumableCount"
                                            value={consumable.amount}
                                            onChange={(e) => updateConsumable(index, parseInt(e.target.value))}
                                        />
                                    </td>
                                    <td>
                                        <h5 className="float-end mx-2">
                                            X
                                        </h5>
                                    </td>
                                </tr>
                            ))
                            : ""
                    }
                </tbody>
            </table>
            <button
                className="addConsumableButton"
                data-bs-toggle="modal"
                data-bs-target="#addConsumable"
                onClick={() => setNewConsumable("")}
            >
                Add
            </button>
            <div className="modal fade accent" id="addConsumable" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title" id="exampleModalLabel">ADD CONSUMABLE</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <label htmlFor="consumableName">Name your consumable</label>
                            <input className="new-consumable-input" type="text" id="consumableName" name="name" onChange={e => setNewConsumable(e.target.value)} value={newConsumable} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="close-modal-btn" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="addConsumableButton" onClick={() => updateConsumable(consumables.length, 0)} data-bs-dismiss="modal">Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};