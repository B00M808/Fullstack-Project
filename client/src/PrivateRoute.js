import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
//import { UserContext } from '../App';

//For auth users, Outlook renders the child routes, also utilized Navigate to redirect no auth user to the signin page
//Outlet allows routes to be nested and extends the route
const PrivateRoute = (props) => {
  const targetRoute = useLocation()
  console.log(targetRoute.Location)
  return (
    props.context.authenticatedUser? <Outlet /> : <Navigate to="signin" replace={true} state={{ targetRoute: targetRoute.Location }} />
  )
}

export default PrivateRoute;
