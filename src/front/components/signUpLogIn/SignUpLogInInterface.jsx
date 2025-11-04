import React, { useState } from "react";
import useGlobalReducer from "../../hooks/useGlobalReducer.jsx";
import "../../../styles/login.css";

const backendUrl = import.meta.env.VITE_BACKEND_URL || "";

export default function AuthForm() {
  const { store, dispatch } = useGlobalReducer();
  const [mode, setMode] = useState("login");

  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    new_password: "",
    current_password: ""
  });

  const handleInput = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isLogin ? "/api/login" : "/api/signup";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formInput),
    });
    console.log(response);
    const data = await response.json();
    console.log(data);

    if (response.ok) {
      if (mode === "login") {
        dispatch({ type: "SET_TOKEN", payload: data.access_token });
      }
      alert(data.message || "Success");
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



// import React, { useEffect, useState } from "react"
// import { Link } from "react-router-dom"
// import useGlobalReducer from "../../hooks/useGlobalReducer.jsx"
// import "../../../styles/login.css"

// const backendUrl = import.meta.env.VITE_BACKEND_URL


// export default function InputForm() {
//   const { store, dispatch } = useGlobalReducer()
//   const [isLogin, setIsLogin] = useState(true);
//   const [formInput, setFormInput] = useState({ email: "", password: "" });

//   const handleInput = (e) =>
//     setFormInput({ ...formInput, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const endpoint = isLogin ? "/api/login" : "/api/signup";
//     const response = await fetch(endpoint, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formInput),
//     });

//     const data = await response.json();
//     console.log(data);
//   };

//   return (
//     <div className="form-container">
//       <h2 className="login-label">{isLogin ? "LOG IN" : "SIGN UP"}</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-row">
//           <h2>Email: </h2>
//           <input
//             type="email" name="email" placeholder="Enter your email..." onChange={handleInput} value={formInput.email} required
//           />
//         </div>

//         <div className="form-row">
//           <h2>PW:   </h2>
//           <input
//             type="password" name="password" placeholder="Enter your password..." onChange={handleInput} value={formInput.password} required
//           />
//         </div>

//         <button className="submit-button" type="submit">SUBMIT</button>

//       </form>
//       {/* <LogInButton /> this will need to be properly routed and linked to the top right of the NavBar but it will need to be present here to switch. */}
//     </div>

//   );
// }

