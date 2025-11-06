import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import useGlobalReducer from "../../hooks/useGlobalReducer.jsx"
import "../../../styles/login.css"

const backendUrl = import.meta.env.VITE_BACKEND_URL


export default function InputForm() {
  const { store, dispatch } = useGlobalReducer();
  const [mode, setMode] = useState("login");

  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    new_password: "",
    current_password: ""
  });
  const navigate = useNavigate();
  const handleInput = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = mode == "login" ? "api/log_in" : "api/sign_up";
    const response = await fetch(backendUrl + endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formInput),
    });
    console.log(response);
    const data = await response.json();
    console.log(data);

    if (response.ok) {
      if (mode === "login") {
        dispatch({
          type: "SET_TOKEN",
          payload: {
            token: data.token,
            user_id: data.user.id
          }
        });
        localStorage.setItem("token", data.token)
        localStorage.setItem("user_id", data.user.id)
        navigate("/characterselection");
      }
      setMode("login");
    } else {
      alert(data.error || "Error");
    }
  };

  return (
    <div className="form-container">
      <h2 className="login-label">
        {mode === "login"
          ? "LOG IN"
          : mode === "signup"
            ? "SIGN UP"
            : "CHANGE PASSWORD"}
      </h2>

      <form onSubmit={handleSubmit}>
        {(mode === "login" || mode === "signup") && (
          <>
            <div className="form-row">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                onChange={handleInput}
                value={formInput.email}
                required
              />
            </div>

            <div className="form-row">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                onChange={handleInput}
                value={formInput.password}
                required
              />
            </div>
          </>
        )}

        <button className="submit-button" type="submit">
          SUBMIT
        </button>
      </form>

      <div className="mode-switch">
        {mode !== "login" && (
          <button onClick={() => setMode("login")}>Log In</button>
        )}
        {mode !== "signup" && (
          <button onClick={() => setMode("signup")}>Sign Up</button>
        )}
      </div>
    </div>
  );
}