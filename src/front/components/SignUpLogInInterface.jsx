import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const { store, dispatch } = useGlobalReducer()
	const backendUrl = import.meta.env.VITE_BACKEND_URL


export default function InputForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [formInput, setFormInput] = useState({email: "", password: ""});

    const handleInput = (e) => 
        setFormInput({ ...formInput, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isLogin ? "/api/login" : "/api/signup"; 
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputData),
    });

    const data = await response.json();
    console.log(data);
  };

    return (
    <div className="form-container">
      <h2>{isLogin ? "LOG IN" : "SIGN UP"}</h2>
      <form onSubmit={handleSubmit}>

        <input
          type="email" name="email" placeholder="Enter your email..." onChange={handleInput} value={formInput.email} required
        />
       
        <input
          type="password" name="password" placeholder="Enter your password..." onChange={handleInput} value={formInput.password} required
        />
        
        <button type="submit">SUBMIT</button> 

      </form>
    {/* <LogInButton /> this will need to be properly routed and linked to the top right of the NavBar but it will need to be present here to switch. */}
    </div>
    
  );
}

