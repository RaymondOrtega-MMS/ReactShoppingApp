import React, { useState } from "react";
import Axios from "axios";

export default function Register() {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const register = () => {
        Axios({
          method: "POST",
          data: {
            username: registerUsername,
            password: registerPassword,
          },
          withCredentials: true,
          url: "http://localhost:4000/register",
        }).then((res) => console.log(res));
      };
    return (
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', backgroundColor: '#f8f8ff'}}>
            <div style={{ gridColumn:'2/3' }}>
                <h1>Register</h1>
                <input
                    placeholder="username"
                    onChange={(e) => setRegisterUsername(e.target.value)}
                />
                <input
                    placeholder="password"
                    onChange={(e) => setRegisterPassword(e.target.value)}
                />
                <button onClick={register}>Submit</button>
            </div>
        </div>
    )
}
