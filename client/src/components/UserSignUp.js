import { useRef } from "react";
import { useNavigate } from "react-router-dom";

/*
//Statefull
//See Step 10 Display validation errors
The "Sign Up" displays validation errors returned from the REST API.
navigate("/") setErr (Sign-In Was unsuccessful), otherwise nav back to root, catch error
*/

const UserSignUp = ({ context }) => {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const emailAddress = useRef(null);
  const password = useRef(null);
const navigate = useNavigate();

const handleSubmit = async (e) => {
e.preventDefault();
await context.actions
.signUp(emailAddress.current.value, password.current.value)
.then(() => {navigate("/")});
};
 

const user = {
  /*Capture values from Users at Sign Up, if not err */
  "firstName": firstName.current.value,
  "lastName": lastName.current.value,
  "emailAddress": emailAddress.current.value,
  "password": password.current.value

};
return navigate ("/");
};

  



export default UserSignUp;
