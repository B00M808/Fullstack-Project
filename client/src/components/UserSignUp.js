import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

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
 

const user = ({ context }) => {
  /*Capture values from Users at Sign Up, if not err */
  "firstName"; firstName.current.value,
  "lastName"; lastName.current.value,
  "emailAddress"; emailAddress.current.value,
  "password"; password.current.value,
//};
//return navigate ("/");
return (

<div class="form--centered">
<h2>Sign Up</h2>
<form onSubmit={handleSubmit}>
    <label htmlFor="firstName">First Name</label>
    <input id="firstName" name="firstName" type="text" />
    <label htmlFor="lastName">Last Name</label>
    <input id="lastName" name="lastName" type="text" />
    <label htmlFor="emailAddress">Email Address</label>
    <input id="emailAddress" name="emailAddress" type="email" />
    <label htmlFor="password">Password</label>
    <input id="password" name="password" type="password" />
    <button className="button" type="submit">Sign Up</button>
    <button className="button button-secondary" onclick={e => {e.preventDefault(); navigate('/');}}>Cancel</button>
</form>
<p>Already have a user account? Click here to <Link to="/sign-in">sign in</Link>!</p>
</div>
);
}
};

export default UserSignUp;
