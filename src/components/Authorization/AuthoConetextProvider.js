import { ListItem } from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authoContextProvider = React.createContext();
export const useAutho = () => useContext(authoContextProvider);

const AuthoContextProvider = ({ children }) => {
  const API = "http://localhost:8001/users";

  const [users, setUsers] = useState([]);
  const [oneUserFromLs, setOneUserFromLs] = useState(null);

  const naviagte = useNavigate();

  async function addUserToDb(user) {
    let { data } = await axios(API);
    let finduser = data.find(item => item.name == user.name);
    if (finduser) {
      naviagte("/register");
      return alert("Username занят!");
    }
    await axios.post(`${API}`, user);
    users.push(user);
    setUsers(users);
    naviagte("/login");
  }

  async function getUserFromDb(user) {
    let { data } = await axios(API);

    let finduser = data.find(item => item.name == user.name);
    if (!finduser) {
      return alert("нет такого username!");
    }
    if (finduser.password !== user.password) {
      return alert("wrong password!");
    }
    localStorage.setItem("user", JSON.stringify(finduser));
    naviagte("/");
    getUserFromLs();
  }

  function getUserFromLs() {
    let user = JSON.parse(localStorage.getItem("user"));
    setOneUserFromLs(user);
    // console.log(oneUserFromLs);
  }

  function logout() {
    localStorage.removeItem("user");
    getUserFromLs();
  }

  async function deleteAccount(id) {
    if (id == null) {
      alert("Error");
    } else {
      await axios.delete(`${API}/${id}`);
      logout();
    }
  }

  return (
    <authoContextProvider.Provider
      value={{
        // leter: leter,
        oneUserFromLs: oneUserFromLs,

        addUserToDb,
        getUserFromDb,
        getUserFromLs,
        logout,
        deleteAccount,
      }}>
      {children}
    </authoContextProvider.Provider>
  );
};
export default AuthoContextProvider;
