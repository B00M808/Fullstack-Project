import { useState, useContext  } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { UserContext } from "../App";

/*
//Statefull
//See Step 10 Display validation errors
The "Sign Up" displays validation errors returned from the REST API.
navigate("/") setErr (Sign-In Was unsuccessful), otherwise nav back to root, catch error
*/

const UserSignUp = ({ context }) => {
  const {errors, setErrors} = useState();
  const { auth, setAuth } = useContext(UserContext);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    //await context.actions
    //.createUser(user) 
  const user = {
   /*Capture values from Users at Sign Up, if not err
    signUp(firstName.current.value, firstName.current.value)
    .signUp(lastName.current.value, lastName.current.value)
    .signUp(emailAddress.current.value, password.current.value)
    .signUp(password.current.value, password.current.value) 
    */
  };
 
} 

};



export default UserSignUp;
