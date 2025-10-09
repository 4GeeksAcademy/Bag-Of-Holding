import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    const { store, dispatch } = useGlobalReducer();

    // Fecth all Races and save them to store.js
    const getRaces = (url) => {
        fetch(url)
            .then(
                (allRaces) => {
                    return allRaces.json()
                }
            )
            .then(
                (data) => {
                    dispatch({
                        type: "set_races",
                        payload: data.results
                    });
                }
            )
    }
    // Fecth all Classes and save them to store.js
    const getClasses = (url) => {
        fetch(url)
            .then(
                (allClasses) => {
                    return allClasses.json()
                }
            )
            .then(
                (data) => {
                    dispatch({
                        type: "set_classes",
                        payload: data.results
                    });
                }
            )
    }
    // Fecth all Subclasses and save them to store.js
    const getSubClasses = (url) => {
        fetch(url)
            .then(
                (allSubClasses) => {
                    return allSubClasses.json()
                }
            )
            .then(
                (data) => {
                    dispatch({
                        type: "set_subclasses",
                        payload: data.results
                    });
                }
            )
    }
    // Call all Fetch functions upon mount
    useEffect(() => {
        getRaces(store.apiURL + "/races");
        getClasses(store.apiURL + "/classes");
        getSubClasses(store.apiURL + "/subclasses");
    }, [])
    return (
        <ScrollToTop>
            <Navbar />
            <Outlet />
            <Footer />
        </ScrollToTop>
    )
}