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
      setErrors((prev) => ({
        ...prev,
        firstNameErr: "Please provide a value for First Name",
      }));
    } else if (lastName.current.value === "") {
      setErrors((prev) => ({
        ...prev,
        lastNameErr: "Please provide a value for Last Name",
      }));
      } else if (emailAddress.current.value === "") {
        setErrors((prev) => ({
          ...prev,
          emailAddressErr: "Please provide a value for Email Address",
        }));    
        } else if (password.current.value === "") {
          setErrors((prev) => ({
            ...prev,
            passwordErr: "Please provide a value for Password",
          }));
          } else {
      const user = {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        emailAddress: emailAddress.current.value,
        password: password.current.value,
      };
//Redirecting to the main public page
      console.log(user);
      context.data
        .createUser(user)
        .then((data) => {
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          setErrors(err);
        });
    }
  };

  return (
    <div className="form--centered">
      {errors && (
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
      )}
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" type="text" ref={firstName} />
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" type="text" ref={lastName} />
        <label htmlFor="emailAddress">Email Address</label>
        <input id="emailAddress" name="emailAddress" type="email" ref={emailAddress} />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" ref={password} />
        <button className="button" type="submit">Sign Up</button>
        <button className="button button-secondary"onClick={(e) => {e.preventDefault(); navigate("/");}} >Cancel</button>
      </form>
      <p>Already have a user account? Click here to{" "}<Link to="/sign-in">sign in</Link>!</p>
    </div>
  );
};

export default UserSignUp;
