import { useState } from "react";
export const DiceBar = () => {
    const [roll, setRoll] = useState({
        dice: "",
        roll: 0
    });

    const rollDice = (die) => {
        setRoll({
            dice: "D" + die,
            roll: Math.floor(Math.random() * die) + 1
        });
    }
    return (
        <div>
            {/* ALL DICE BUTTONS */}
            <div className="dice-box">
                <button className="dice-block" onClick={() => rollDice(20)} data-bs-toggle="modal" data-bs-target="#diceRoll">
                    <h3 className="m-auto">D20</h3>
                </button>
                <button className="dice-block" onClick={() => rollDice(12)} data-bs-toggle="modal" data-bs-target="#diceRoll">
                    <h3 className="m-auto">D12</h3>
                </button>
                <button className="dice-block" onClick={() => rollDice(10)} data-bs-toggle="modal" data-bs-target="#diceRoll">
                    <h3 className="m-auto">D10</h3>
                </button>
                <button className="dice-block" onClick={() => rollDice(8)} data-bs-toggle="modal" data-bs-target="#diceRoll">
                    <h3 className="m-auto">D8</h3>
                </button>
                <button className="dice-block" onClick={() => rollDice(6)} data-bs-toggle="modal" data-bs-target="#diceRoll">
                    <h3 className="m-auto">D6</h3>
                </button>
                <button className="dice-block" onClick={() => rollDice(4)} data-bs-toggle="modal" data-bs-target="#diceRoll">
                    <h3 className="m-auto">D4</h3>
                </button>
            </div>
            {/* MODAL THAT SHOWS DICE ROLL */}
            <div className="modal fade accent" id="diceRoll" tabIndex="-1" aria-labelledby="diceRollLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title" id="diceRollLabel">{roll.dice}</h2>
                        </div>
                        <div className="modal-body">
                            <h1 className="bg-white">{roll.roll}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};