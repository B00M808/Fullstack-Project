import React, { useContext, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "./App";

//Authenticated User allows user access but unauthorized user does not exist then redirected to sign in
const PrivateRoute = ({Component}) => {
  const {auth} = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if(!auth) {
      navigate('/signin')
    }
  }, [])

  return (
    <><Component /></>
  )
  
}
export default PrivateRoute;
