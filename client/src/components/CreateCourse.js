import { React, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../App';

// This component provides the "Create Course" screen by rendering a form that allows a user to create a new course. 

const CreateCourse = ({ context }) => {
  const [course, setCourse] = useState("");
  const {authUser} = useContext(UserContext);
  const [title, setTitle] = useState(""); // eslint-disable-line
  const [estimatedTime, setEstimatedTime] = useState("");
  const [description, setDescription] = useState("");
  const [materialsNeeded, setMaterialsNeeded] = useState("");
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
    } else if (description.current.value === "") {
      setErrors((prev) => ({
        ...prev,
        descriptionErr: "Please provide a value for Description",
      }));
     } else {
          const body = {
      title: course,
      description: description,
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
        </div>}
        <form onSubmit={handleSubmit}>
          <div className="main--flex">
            <div>
              <label htmlFor="title">Course Title</label>
              <input id="title" className="title" type="text" value={course} onChange= {e => setCourse(e.target.value)} />
              <label htmlFor="description">Course Description</label>
              <textarea id="description" className="description" type="text" value={description} onChange= {e => setDescription(e.target.value)} > </textarea>
            </div>
            <div> 
              <label htmlFor="estimatedTime">Estimated Time</label>
              <input id="estimatedTime" className="estimatedTime" type="text" value={estimatedTime} onChange= {e => setEstimatedTime(e.target.value)} />
              <label htmlFor="materialsNeeded">Materials Needed</label>
              <textarea id="materialsNeeded" className="materialsNeeded" type="text" value={materialsNeeded} onChange= {e => setMaterialsNeeded(e.target.value)} ></textarea>
            </div>
          </div>
          <button className="button" type="submit">Create Course</button>
          <button className="button button-secondary" onClick={e => {e.preventDefault(); navigate('/');}}>Cancel</button>
        </form>
      </div>
    </main>
  );
};
export default CreateCourse;