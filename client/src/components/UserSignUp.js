import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

/*
*****The "Sign Up" displays validation errors returned from the REST API.
navigate("/") setErr (Sign-In Was unsuccessful), otherwise nav back to root, catch error

The "Sign Up", "Create Course", and "Update Course" screens display validation errors returned from the REST API.
*/
//Allows a user to sign up by creating a new account or displays validation errors
const UserSignUp = ({ context }) => {
  const [errors, setErrors] = useState({
    firstNameErr: "",
    lastNameErr: "",
    emailAddressErr: "",
    passwordErr: "",
  });

  const firstName = useRef(null);
  const lastName = useRef(null);
  const emailAddress = useRef(null); // eslint-disable-line
  const password = useRef(null); // eslint-disable-line
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Validation Errors
    if (firstName.current.value === "") {
      setErrors({
        ...errors,
        firstNameErr: "Please provide a value for First Name",
      });
    }
    if (lastName.current.value === "") {
      setErrors({
        ...errors,
        lastNameErr: "Please provide a value for First Name",
      });
    }
    if (emailAddress.current.value === "") {
      setErrors({
        ...errors,
        emailAddressErr: "Please provide a value for First Name",
      });
    }
    if (password.current.value === "") {
      setErrors({
        ...errors,
        passwordErr: "Please provide a value for First Name",
      });
    }
    // if (Object.values(errors).every((err) => (err = ""))) {
    //   const user = {
    //     firstName: firstName.current.value,
    //     lastName: lastName.current.value,
    //     emailAddress: emailAddress.current.value,
    //     password: password.current.value,
    //   };
    //   //Redirecting to the main public page
    //   console.log(user);
    //   context.data
    //     .createUser(user)
    //     .then((data) => {
    //       navigate("/");
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
    console.log(errors);
  };

  return (
    <div className="form--centered">
      <div class="validation--errors">
        <h3>Validation Errors</h3>
        <ul>
          {errors.firstNameErr.length >=0 && <li>Please provide a value for "Title"</li> }
          {errors.lastNameErr.length >=0 && <li>Please provide a value for "Last Name"</li> }
        </ul>
      </div>
      {/* {errors && (
        <div>
          <p>{errors?.firstNameErr}</p>
        </div>
      )}
      {errors && (
        <div>
          <p>{errors?.lastNameErr}</p>
        </div>
      )}
      {errors && (
        <div>
          <p>{errors?.emailAddressErr}</p>
        </div>
      )}
      {errors && (
        <div>
          <p>{errors?.passwordErr}</p>
        </div>
      )} */}
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
