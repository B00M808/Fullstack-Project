
/*
import React, { useState, useEffect, useContext  } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { UserContext } from '../App';

/*
The component renders a form allowing a user to update one of their existing courses, an "Update Course" button that when clicked sends a PUT request to the REST API's /api/courses/:id route, and a "Cancel" button that returns the user to the "Course Detail" screen.


const UpdateCourse = ({ context }) => {
  console.log(context)
  const [course, setCourse] = useState(""); // eslint-disable-line
  const {authUser} = useContext(UserContext);
  console.log(context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState(""); // eslint-disable-line
  const [estimatedTime, setEstimatedTime] = useState("");
  const [materialsNeeded, setMaterialsNeeded] = useState("");

  //Stores errors returned from REST API
  const [errors, setErrors] = useState({ // eslint-disable-line
    titleErr: "",
    descriptionErr: "",
    estimatedTimeErr: "",
    materialsNeededErr: "", 
  });

  const { id } = useParams(); // eslint-disable-line
  const navigate = useNavigate();
  useEffect(() => {
    context.data.getCourse(id)
    .then((data) => {
      console.log(data);
      setCourse(data);
      setTitle(data.title);
      setDescription(data.description);
      setUserId(data.userId);
      setEstimatedTime(data.estimatedTime);
      setMaterialsNeeded(data.materialsNeeded);
    })
    .catch((err) => console.log(err));
  }, [context, id]);

  const handleUpdate = (e) => { // eslint-disable-line
    e.preventDefault();
    navigate(`/courses/${id}`);

    if (title.current.value === "") {
      setErrors((prev) => ({
        ...prev,
        titleErr: "Please provide a value for Title",
      }));
    } else if (description.current.value === "") {
      setErrors((prev) => ({
        ...prev,
        descriptionErr: "Please provide a value for Description",
      }));
    } else if (estimatedTime.current.value === "") {
        setErrors((prev) => ({
          ...prev,
          estimatedTimeErr: "Please provide a value for Estimated Time",
        }));    
    } else if (materialsNeeded.current.value === "") {
          setErrors((prev) => ({
            ...prev,
            materialsNeededErr: "Please provide a value for Materials Needed",
          }));
        } else {
    const body = {
      id: 1,
      title: title,
      description: description,
      estimatedTime: estimatedTime,
      materialsNeeded: materialsNeeded,
      userId: authUser.userId,
    };
  
    context.data.updateCourse(body, authUser.email, authUser.password, id)
    .then(() => {navigate("/");});
  };


//handleSubmit when the form is submitted
//function is creating the body, and sign in needed to call the update course
const handleSubmit = (e) => { // eslint-disable-line
  e.preventDefault(); 
};
    // context.data
    //   .updateCourse(
    //     course,
        // context.authenticatedUser.emailAddress,
        // context.authenticatedUser.password
    //   )
    //   .then((errors) => {
    //     if (errors.length > 0) {
    //       // setErrors(errors);
    //     } else {
    //       navigate("/");
    //     }
    //   })
    //   .catch((errors) => {
    //     console.error(errors);
    //   });
  
//Redirects to the Course Detail page
  const handleCancel = (e) => {
    e.preventDefault();
    navigate(`/courses/${id}`);
  };

  //Updates the state with what the user is typing in by grabbing e.target.value 
  const handleChange = (e) => { // eslint-disable-line
    setTitle(e.target.value);
    setDescription(e.target.value);
    setEstimatedTime(e.target.value);
    setMaterialsNeeded(e.target.value);
  };

  return (
    <div className="wrap">
      <h2>Update Course</h2>
      {errors && (
        <div>
          <p>{errors?.titleErr}</p>
        </div>
      )}
      {errors && (
        <div>
          <p>{errors?.descriptionErr}</p>
        </div>
      )}
      {errors && (
        <div>
          <p>{errors?.estimatedTimeErr}</p>
        </div>
      )}
      {errors && (
        <div>
          <p>{errors?.materialsNeededErr}</p>
        </div>
      )}
      <form onSubmit={handleUpdate}>
        <div className="main--flex">
          <div>
            <label htmlFor="title">Course Title</label>
            <input id="title" className="title" type="text" value={title} onChange= {e => setTitle(e.target.value)} />
            <label htmlFor="description">Course Description</label>
            <textarea id="description" className="description" type="text" value={description} onChange={e => setDescription(e.target.value)} ></textarea>
          </div>
          <div>
            <label htmlFor="estimatedTime">Estimated Time</label>
            <input id="estimatedTime" className="estimatedTime" type="text" value={estimatedTime} onChange= {e => setEstimatedTime(e.target.value)} />
            <label htmlFor="materialsNeeded">Materials Needed</label>
            <textarea id="materialsNeeded" className="materialsNeeded" type="text" value={materialsNeeded} onChange= {e => setMaterialsNeeded(e.target.value)}></textarea>
          </div>
        </div>
        <button className="button" type="submit">Update Course</button>
        <Link className="button button-secondary" onClick={handleCancel}>
          Cancel
        </Link>
      </form >
    </div>
  );
      };
};
  export default UpdateCourse;


  // NEWEST CODE FOR SIGN UP
  import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

/*
*****The "Sign Up" displays validation errors returned from the REST API.
navigate("/") setErr (Sign-In Was unsuccessful), otherwise nav back to root, catch error

The "Sign Up", "Create Course", and "Update Course" screens display validation errors returned from the REST API.

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
      )} }
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
*/