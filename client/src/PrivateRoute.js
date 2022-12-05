import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./App";

/*Defined a higher-order component (HOC) named PrivateRoute for configuring protected routes (i.e. routes that require authentication).
Utilized the <Route> component's render property to define a function that renders the component associated with the private route when there's an authenticated user or redirects the user to the /signin route if there's not an authenticated user.
*/

//Authenticated User allows user access but unauthorized user does not exist then redirected to sign in
const PrivateRoute = ({Component}) => {
  const {auth} = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if(!auth) {
      navigate('/signin')
    }
  }, []) // eslint-disable-line

  return (
    <><Component /></>
  )
  
}
export default PrivateRoute;
