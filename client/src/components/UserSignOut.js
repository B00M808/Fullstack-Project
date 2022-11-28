import { useEffect } from "react";
import { Navigate } from "react-router-dom";

/*
//Stateless components: UserSignOut - It doesn't render any visual elements. Instead, it signs out the authenticated user and redirects the user to the default route (i.e. the list of courses).

//A signOut() method is globally available that removes the authenticated user's information (including their password) from the global state.
*/

const UserSignOut = ({ context }) => {
  useEffect(() => {
    context.actions.signOut();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Navigate to="/" />;
};


export default UserSignOut;