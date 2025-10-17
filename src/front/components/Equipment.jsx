import React from "react"
import { ItemBlock } from "./ItemBlock.jsx"
import { inventory } from "./item.js"

export const EquipmentDisplay = (props) => {
    let details = inventory

    const weaponAndTool = details.filter(
        (item) => item.type === "weapon" || item.type === "tool"
    );
    const armorAndJewelry = details.filter(
        (item) => item.type === "armor" || item.type === "accessory" || item.type === "jewelry"
    );

    return (
        <div>
            <div className="weapons-tools-block">
                <div>
                    <h2>
                        Weapons & Tools
                    </h2>
                    <div>
                        {weaponAndTool.map((item) => (
                            <ItemBlock key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="armor-and-jewelry">
                <div>
                    <h2>
                        Armor & Jewelry
                    </h2>
                    <div>
                        {armorAndJewelry.map((item) => (
                            <ItemBlock key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}