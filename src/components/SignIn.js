import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Axios from "axios";

export default function SignIn() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => console.log(res));
  };
  return (
    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', backgroundColor: '#f8f8ff'}}>
      <div style={{ gridColumn:'2/3' }}>
        <h1>Login</h1>
        <input
          placeholder="username"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}>Submit</button>
      </div>
      <Link style={{ gridColumn:'2/3' }} to="/register">Register</Link>
    </div>
  );
}