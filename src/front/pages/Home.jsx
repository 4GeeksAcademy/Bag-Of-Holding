import React, { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
	}, [])

	return (
		<div className="text-center mt-5">
			body
		</div>
	);
}; 