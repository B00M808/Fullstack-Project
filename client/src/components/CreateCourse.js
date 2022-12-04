import { React, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../App';

// This component provides the "Create Course" screen by rendering a form that allows a user to create a new course. 
// Display validation errors
// ****Update the "Sign Up", "Create Course", and "Update Course" screens to display validation errors returned from the REST API.

const CreateCourse = ({ context }) => {
  const [course, setCourse] = useState("");
  const {authUser} = useContext(UserContext);
  const [title, setTitle] = useState(""); // eslint-disable-line
  const [estimatedTime, setEstimatedTime] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [materialsNeeded, setCourseMaterialsNeeded] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    titleErr: "",
    descriptionErr: "",
    estimatedTimeErr: "",
    materialsNeededErr: "", 
  }); 

  const handleSubmit = async (e) => {  
    e.preventDefault();
  
    //Validation Errors
    if (title.current.value === "") {
      setErrors((prev) => ({
        ...prev,
        titleErr: "Please provide a value for Title",
      }));
    } else if (courseDescription.current.value === "") {
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
      title: course,
      description: courseDescription,
      userId: 1,
      estimatedTime: estimatedTime,
      materialsNeeded: materialsNeeded
    }
    await context.data.createCourse(body, authUser.email, authUser.password)
    .then(() => {navigate("/")});
  };
  };
//Renders a "Create Course" button that when clicked sends a POST request to the REST API's /api/courses route. Also renders a "Cancel" button that returns the user to the default route (i.e. the list of courses).      
  return (
    <main>
      <div className="wrap">
        <h2>Create Course</h2>
        <div className="validation--errors">
                    <h3>Validation Errors</h3>
                    <ul>
                        <li>Please provide a value for "Title"</li>
                        <li>Please provide a value for "Description"</li>
                    </ul>
                </div>
                {errors && <div>
        <p>Error</p></div>}
        <form onSubmit={handleSubmit}>
          <div className="main--flex">
            <div>
              <label htmlFor="courseTitle">Course Title</label>
              <input id="courseTitle" className="courseTitle" type="text" value={course} onChange = {e => setCourse(e.target.value)} />
              <label htmlFor="courseDescription">Course Description</label>
              <textarea id="courseDescription" className="courseDescription" type="text" value={courseDescription} onChange = {e => setCourseDescription(e.target.value)} > </textarea>
            </div>
            <div> 
              <label htmlFor="estimatedTime">Estimated Time</label>
              <input id="estimatedTime" className="estimatedTime" type="text" value={estimatedTime} onChange = {e => setEstimatedTime(e.target.value)} />
              <label htmlFor="materialsNeeded">Materials Needed</label>
              <textarea id="materialsNeeded" className="materialsNeeded" type="text" value={materialsNeeded} onChange = {e => setCourseMaterialsNeeded(e.target.value)} ></textarea>
            </div>
          </div>
          <button className="button" type="submit">
            Create Course
          </button>
          <button
            className="button button-secondary"
            onClick={e => {e.preventDefault(); navigate('/');}}>Cancel</button>
        </form>
      </div>
    </main>
  );
};
export default CreateCourse;