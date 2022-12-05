import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

/*
The "Sign Up" displays validation errors returned from the REST API.
navigate("/") setErr (Sign-In Was unsuccessful), otherwise nav back to root, catch error
*/

//Allows a user to sign up by creating a new account or displays validation errors
const UserSignUp = ({ context }) => {
  const [errors, setErrors] = useState({
    firstNameErr: "",
    lastNameErr: "",
    emailAddressErr: "",
    passwordErr: "",
  });
  const [isError, setIsError] = useState(false);

  const firstName = useRef(null);
  const lastName = useRef(null);
  const emailAddress = useRef(null); // eslint-disable-line
  const password = useRef(null); // eslint-disable-line
  const navigate = useNavigate();

    //Form handling, when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    
    //Checking if state value is empty when the user submits, a message error pops up
    //(prevState) is utlized as a destructing method to manage the various states, extracting only what is needed 
    if (firstName.current.value === "") {
      setErrors((prevState) => ({
        ...prevState,
        firstNameErr: "Please provide a value for First Name"
      })
      );
      setIsError(true); //whenever user does not submit something, error is triggered
    } else {
      setErrors((prevState) => ({
        ...prevState,
        firstNameErr: "" //when user submits text, goes back to empty
      })
      );
      setIsError(false);
    }
    if (lastName.current.value === "") {
      setErrors((prevState) => ({
        ...prevState,
        lastNameErr: "Please provide a value for Last Name"
      })
      );
      setIsError(true); //whenever user does not submit something, error is triggered
    } else {
      setErrors((prevState) => ({
        ...prevState,
        lastNameErr: "" //when user submits text, goes back to empty
      })
      );
      setIsError(false); //when user submits text, no errors are evoked
    }
    if (emailAddress.current.value === "") {
      setErrors((prevState) => ({
        ...prevState,
        emailAddressErr: "Please provide a value for Email Address"
      })
      );
      setIsError(true); //whenever user does not submit something, error is triggered
    } else {
      setErrors((prevState) => ({
        ...prevState,
        emailAddressErr: "" //when user submits text, goes back to empty
      })
      );
      setIsError(false); //when user submits text, no errors are evoked
    }
    if (password.current.value === "") {
      setErrors((prevState) => ({
        ...prevState,
        passwordErr: "Please provide a value for Password"
      })
      );
      setIsError(true); //whenever user does not submit something, error is triggered
    } else {
      setErrors((prevState) => ({
        ...prevState,
        passwordErr: "" //when user submits text, goes back to empty
      })
      );
      setIsError(false); //when user submits text, no errors are evoked
    }
    //Stored values making them into objects
        const user = {
          firstName: firstName.current.value,
          lastName: lastName.current.value,
          emailAddress: emailAddress.current.value,
          password: password.current.value,
        };

          //Checking if any value is still empty, requesting credentials
        if(user.firstName === "" || user.lastName === "" || user.emailAddress === "" || user.password === "") {
        } else {
          context.data
          .createUser(user)
          .then((data) => {
            navigate("/");  //Redirecting to the main public page
          })
          .catch((err) => {
          });
        }
      

    
  };
//Checking code block if state is true or false, Validation Errors, nested errors
  return (
    <div className="form--centered">
      {isError && 
        <div className="validation--errors">
        <h3>Validation Errors</h3>
        <ul>
          {errors.firstNameErr && <li>{errors.firstNameErr}</li> }
          {errors.lastNameErr && <li>{errors.lastNameErr}</li> }
          {errors.emailAddressErr && <li>{errors.emailAddressErr}</li> }
          {errors.passwordErr && <li>{errors.passwordErr}</li> }
        </ul>
      </div>
      }
      
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" type="text" ref={firstName} />
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" type="text" ref={lastName} />
        <label htmlFor="emailAddress">Email Address</label>
        <input
          id="emailAddress"
          name="emailAddress"
          type="email"
          ref={emailAddress}
        />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" ref={password} />
        <button className="button" type="submit">
          Sign Up
        </button>
        <button
          className="button button-secondary"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Cancel
        </button>
      </form>
      <p>
        Already have a user account? Click here to{" "}
        <Link to="/sign-in">Sign In</Link>!
      </p>
    </div>
  );
};

export default UserSignUp;
