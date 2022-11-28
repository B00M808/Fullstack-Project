import { useEffect, useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../App';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Consumer>
//       {(context) => (
//         <Route
//           {...rest}
//           render={(props) => {
//             const { authenticateUser } = context;
//             if (authenticateUser) {
//               return <Component {...props} />;
//             } else {
//               return (
//                 <Redirect
//                   to={{
//                     from: "/signin",
//                     state: { from: props.location },
//                   }}
//                 />
//               );
//             }
//           }}
//         />
//       )}
//     </Consumer>
//   );
// };


const PrivateRoute = ({Component}) => {
  const {auth} = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if(!auth) {
     navigate("/signin")
    }
  }, [])

  return (
    <><Component/></>
  )
}


export default PrivateRoute;
