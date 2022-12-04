import React from "react";
import { Link } from "react-router-dom";

/*
Header- Displays the top menu bar for the application and includes buttons for signing in and signing up (if there's not an authenticated user) or the user's name and a button for signing out (if there's an authenticated user).
*/

const Header = ({ context }) => {
  const authUser = context.authenticatedUser;

  return (
    <header>
      <div className="wrap header--flex">
        <h1 className="header--logo">
          <Link to="/">Courses</Link>
        </h1>
        <nav>
        {authUser ? (
              <ul className="header--signedin">
                <li>{`Welcome, ${authUser.firstName} ${authUser.lastName}!`}</li>
                <li>
                <Link to="/signout">Sign Out</Link>
                </li>
              </ul>
            ) : (
          <ul className="header--signedout">
            <li>
              <Link className="signin" to="/signin">
                Sign In
              </Link>
            </li>
            <li>
              <Link className="signup" to="/signup">
                Sign Up
              </Link>
            </li>
          </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
