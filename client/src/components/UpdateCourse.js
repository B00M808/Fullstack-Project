import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { UserContext } from "../App";

/*
The component renders a form allowing a user to update one of their existing courses, an "Update Course" button that when clicked sends a PUT request to the REST API's /api/courses/:id route, and a "Cancel" button that returns the user to the "Course Detail" screen.
*/

const UpdateCourse = ({ context }) => {
  console.log(context);
  const [course, setCourse] = useState(""); // eslint-disable-line
  const { authUser } = useContext(UserContext);
  console.log(context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [materialsNeeded, setMaterialsNeeded] = useState("");
  //Stores errors returned from REST API
  const [errors, setErrors] = useState({
    // eslint-disable-line
    titleErr: "",
    descriptionErr: "",
    estimatedTimeErr: "",
    materialsNeededErr: "",
  });

  const { id } = useParams(); // eslint-disable-line
  const navigate = useNavigate();
  useEffect(() => {
    context.data
      .getCourse(id)
      .then((data) => {
        console.log(data);
        setCourse(data);
        // setTitle(data.title);
        // setDescription(data.description);
        // setEstimatedTime(data.estimatedTime);
        // setMaterialsNeeded(data.materialsNeeded);
      })
      .catch((err) => console.log(err));
  }, [context, id]);

  const handleUpdate = (e) => {
    // eslint-disable-line
    e.preventDefault();
    navigate(`/courses/${id}`);

    if (title === "") {
      setErrors((prev) => ({
        ...prev,
        titleErr: "Please provide a value for Title",
      }));
    } else if (description === "") {
      setErrors((prev) => ({
        ...prev,
        descriptionErr: "Please provide a value for Description",
      }));
    } else if (estimatedTime === "") {
      setErrors((prev) => ({
        ...prev,
        estimatedTimeErr: "Please provide a value for Estimated Time",
      }));
    } else if (materialsNeeded === "") {
      setErrors((prev) => ({
        ...prev,
        materialsNeededErr: "Please provide a value for Materials Needed",
      }));
    } else {
      console.log(errors)
      const body = {
        id: 1,
        title: title,
        description: description,
        estimatedTime: estimatedTime,
        materialsNeeded: materialsNeeded,
        userId: authUser.userId,
      };

      context.data
        .updateCourse(body, authUser.email, authUser.password, id)
        .then(() => {
          navigate("/");
        });
    }
  };
    //Redirects to the Course Detail page
    const handleCancel = (e) => {
      e.preventDefault();
      navigate(`/courses/${id}`);
    };

  return (
    <div className="wrap">
      <h2>Update Course</h2>
      {errors && (
      <div className="validation--errors">
          <h3>Validation Errors</h3>
          <ul>
              <li>Please provide a value for "Title"</li>
              <li>Please provide a value for "Description"</li>
          </ul>
      </div>
        )}

       
      <form onSubmit={handleUpdate}>
        <div className="main--flex">
          <div>
            <label htmlFor="courseTitle">Course Title</label>
            <input
              id="title"
              className="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="description">Course Description</label>
            <textarea
              id="description"
              className="description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label htmlFor="estimatedTime">Estimated Time</label>
            <input
              id="estimatedTime"
              className="estimatedTime"
              type="text"
              value={estimatedTime}
              onChange={(e) => setEstimatedTime(e.target.value)}
            />
            <label htmlFor="materialsNeeded">Materials Needed</label>
            <textarea
              id="materialsNeeded"
              className="materialsNeeded"
              type="text"
              value={materialsNeeded}
              onChange={(e) => setMaterialsNeeded(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button className="button" type="submit">
          Update Course
        </button>
        <Link className="button button-secondary" onClick={handleCancel}>
          Cancel
        </Link>
      </form>
    </div>
  );
};
export default UpdateCourse;
