import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAutho } from "./AuthoConetextProvider";

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
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={() => getOneUser()}>Залогиниться</button>
    </div>
  );
};

export default LoginUser;
