/* eslint-disable react/prop-types */
import { useState } from "react";
import UserContext from "./Usercontext";

export default function UserData(props) {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <UserContext.Provider value={{ showAlert, setShowAlert }}>
      {props.children}
    </UserContext.Provider>
  );
}
