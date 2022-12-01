import { useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useRef, useState, useContext } from "react";
import { UserContext } from "../App";
/*
//Stateless components: UserSignOut - It doesn't render any visual elements. Instead, it signs out the authenticated user and redirects the user to the default route (i.e. the list of courses).

//A signOut() method is globally available that removes the authenticated user's information (including their password) from the global state.
*/
const UserSignOut = ({ context }) => {
  //const { auth, setAuth } = useContext(UserContext);
const navigate = useNavigate();
  useEffect(() => {
    context.actions.signOut();
    //setAuth(false);
  //}, []);
  //console.log(auth);
  return navigate ("/");
});

};

export default UserSignOut;
