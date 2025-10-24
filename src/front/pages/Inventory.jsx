import React, { useEffect, useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"
import { EquipmentDisplay } from "../components/EquipmentDisplay.jsx"

export const Inventory = () => {
  const { store, dispatch } = useGlobalReducer()
  const inventoryList = store.inventoryList || []  
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchInventory() {
      try {
        // Replace with Fetch from DnD API later

        // ChatGPT dummydata
        const dummyData = [
          {
            id: 1,
            name: "Longsword",
            type: "weapon",
            rarity: "uncommon",
            icon: "/icons/longsword.png",
            description: "A balanced blade favored by seasoned adventurers.",
            stats: { damage: "1d8 slashing", weight: "3 lb", bonus: "+1" },
          },
          {
            id: 2,
            name: "Lockpicks",
            type: "tool",
            rarity: "common",
            icon: "/icons/lockpicks.png",
            description: "A small kit used to bypass locks.",
            stats: { uses: "10", skill: "Dexterity" },
          },
          {
            id: 3,
            name: "Chainmail",
            type: "armor",
            rarity: "rare",
            icon: "/icons/chainmail.png",
            description: "Heavy armor providing excellent protection.",
            stats: { ac: 16, weight: "55 lb" },
          },
          {
            id: 4,
            name: "Amulet of the Moon",
            type: "jewelry",
            rarity: "legendary",
            icon: "/icons/amulet.png",
            description: "A radiant amulet imbued with lunar power.",
            stats: { bonus: "+2 Wisdom", ability: "Moonlight Shield" },
          },
        ]

        dispatch({ type: "set_inventory", payload: dummyData })
        setIsLoading(false)
      } catch (error) {
        console.error("Error loading inventory:", error)
        setIsLoading(false)
      }
    }

    fetchInventory()
  }, [dispatch])

  if (isLoading) return <p>Loading inventory...</p>

  return (
    <div>
      <h1 >Character Inventory</h1>
      <EquipmentDisplay details={inventoryList} />
    </div>
  )
}
