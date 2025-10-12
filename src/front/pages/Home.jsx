import React, { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import InputForm from "../components/SignUpLogInInterface.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
	}, [])

	return (
		<div className="home-container">
			<InputForm />
		</div>
	);
}; 