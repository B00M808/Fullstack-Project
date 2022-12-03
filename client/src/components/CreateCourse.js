import { React, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../App';

// Display validation errors
// Update the "Sign Up", "Create Course", and "Update Course" screens to display validation errors returned from the REST API.

const CreateCourse = ({ context }) => {
  const [course, setCourse] = useState("");
  const [errors, setErrors] = useState(); // eslint-disable-line  
  const {authUser} = useContext(UserContext);
  const [estimatedTime, setEstimatedTime] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [materialsNeeded, setCourseMaterialsNeeded] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => { // eslint-disable-line
    e.preventDefault();

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
      
  return (
    <main>
      <div className="wrap">
        <h2>Create Course</h2>
        <form onSubmit={handleSubmit}>
        {errors && <div>
        <p>Error</p></div>}
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
export default CreateCourse