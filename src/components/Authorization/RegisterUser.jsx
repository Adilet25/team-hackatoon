import React, { useState } from "react";
import { useAutho } from "./AuthoConetextProvider";
import { useNavigate } from "react-router-dom";
import "../../styles/register.css";

const RegisterUser = () => {
  //! бро, потом эту фунцию  подстрой под себя , по кнопкам поставь

  const { addUserToDb, isAdmin, setIsAdmin } = useAutho();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function createUser() {
    if (!name || !password) {
      return alert("Empty strings!");
    } else {
      let user = {
        name,
        password,
        isAdmin,
      };
      addUserToDb(user);
      setPassword("");
      setName("");
    }
  }

  return (
    <div className="register">
      <h1>Registration Page</h1>
      <input
        className="registerInput"
        type="text"
        placeholder="Name"
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <input
        className="registerInput"
        type="text"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
        value={password}
      />
      <div className="adminBlock">
        <h3 className="admin_checkbox">
          ADMIN
          <input
            className="checkbox"
            type="checkbox"
            onChange={e => setIsAdmin(true)}
          />
        </h3>
      </div>
      <button onClick={() => createUser()} className="registerBotton">
        Register
      </button>
    </div>
  );
};

export default RegisterUser;
