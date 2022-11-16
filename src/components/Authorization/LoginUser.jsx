import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAutho } from "./AuthoConetextProvider";
import "../../styles/login.css";

const LoginUser = () => {
  const { getUserFromDb } = useAutho();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const naviagte = useNavigate();
  // const [oneUser, setOneUser] = useState("");

  function getOneUser() {
    if (!name || !password) {
      alert("Empty strings!");
      return;
    } else {
      let user = {
        name,
        password,
      };
      getUserFromDb(user);
    }
  }

  return (
    <div className="login">
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="loginInput"
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="loginInput"
      />
      <button onClick={() => getOneUser()} className="loginBotton">
        Login
      </button>
    </div>
  );
};

export default LoginUser;
