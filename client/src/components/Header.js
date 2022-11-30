import React from "react";
import { Link } from "react-router-dom";

/*
//Stateless components:
Header- Displays the top menu bar for the application and includes buttons for signing in and signing up (if there's not an authenticated user) or the user's name and a button for signing out (if there's an authenticated user).
*/

const Header = () => {
  return (
    <header>
      <div className="wrap header--flex">
        <h1 className="header--logo">
          <Link to="/">Courses</Link>
        </h1>
        <nav>
          <ul className="header--signedout">
            <li>
              <Link className="signup" to="/signup">
                Sign Up
              </Link>
            </li>
            <li>
              <Link className="signin" to="/signin">
                Sign In
              </Link>
            </li>
            <li>
              <Link className="signout" to="/signout">
                Sign Out
              </Link>
            </li>
          </ul>
          {/* )} */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
