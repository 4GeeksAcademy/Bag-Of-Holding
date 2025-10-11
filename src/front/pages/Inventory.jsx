import React, { useEffect, useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Inventory = () => {
    const { store, dispatch } = useGlobalReducer()
    let inventoryList = store.inventoryList
    useEffect(() => {
    }, [])

    return (
        <div></div>
    )
}