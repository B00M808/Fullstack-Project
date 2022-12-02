/*
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

A Statefull component
Utilized a signIn() method which is globally available.
Authenticated a user using their email address and password.
Persists the authenticated user's information (including their password) in the global state.
FOLLOW UP on errors, see instructions
*/
/*
const UserSignIn = ({ context }) => {
  const emailAddress = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
    await context.actions
    .signIn(emailAddress.current.value, password.current.value)
    .then(() => {navigate("/")});
  };
  */

import { useRef, Context } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { UserContext } from '../App';
//Statefull

const UserSignIn = ({ context }) => {
  const {auth, setAuth} = Context(context);
  console.log(auth);
  const emailAddress = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await context.actions
      .signIn(emailAddress.current.value, password.current.value)
      .then(setAuth(true))
      .then(navigate("/")); 
    };
  
  return (
    <main>
      <div className="form--centered">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="emailAddress">Email Address</label>
          <input id="emailAddress" name="emailAddress" type="email" defaultValue="" ref={emailAddress} />
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" defaultValue=" "ref={password} />
          <button className="button" type="submit">
            Sign In
          </button>
          <Link className="button button-secondary" to="/">
            Cancel
          </Link>
        </form>
        <p>
          Don't have a user account? Click here to
          <Link to="/signup">Sign Up</Link>!
        </p>
      </div>
    </main>
  );
};

export default UserSignIn;