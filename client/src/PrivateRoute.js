import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./App";

/*Define a higher-order component (HOC) named PrivateRoute for configuring protected routes (i.e. routes that require authentication).
Use a stateless component to wrap an instance of the <Route> component.
Use the <Route> component's render property to define a function that renders the component associated with the private route if there's an authenticated user or redirects the user to the /signin route if there's not an authenticated user.
For an example of how this is done, see this page in the React Router documentation.
Update the following routes to use the PrivateRoute component:
/courses/create
/courses/:id/update
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
