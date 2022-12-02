import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import axios from "axios";
//import { useNavigate } from "react-router-dom"

/* 
//See Step 10 Display validation errors
-Create Course" screens display validation errors returned from the REST API.
//Statefull
*/

  /*
    This is what api function does in Data
    const options = {
      method: 'POST',
      url: 'http://localhost:5000/api/courses',
      headers: {Authorization: 'Basic am9lQHNtaXRoLmNvbTpqb2VwYXNzd29yZA=='},
      data: {
        title: course?.title,
        description: course?.description,
        userId: randomNumber,
        estimatedTime: course.estimatedTime
      }
    };
    
    // const course = {title: title.current.value, description: description.current.value, estimatedTime: estimatedTime}
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  };
  
*/

const CreateCourse = ({ context }) => {
  console.log(context)
  const [course, setCourse] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await context.actions
    .createCourse(emailAddress.current.value, password.current.value)
    .then(() => {navigate("/")});
      
  return (
    <main>
      <div className="wrap">
        <h2>Create Course</h2>
        <form onSubmit={handleSubmit}>
          <div className="main--flex">
            <div>
              <label htmlFor="courseTitle">Course Title</label>
              <input id="courseTitle" className="courseTitle" type="text" />
              <label htmlFor="courseDescription">Course Description</label>
              <textarea id="courseDescription" className="courseDescription"></textarea>
            </div>
            <div>
              <label htmlFor="estimatedTime">Estimated Time</label>
              <input id="estimatedTime" className="estimatedTime" type="text"/>
              <label htmlFor="materialsNeeded">Materials Needed</label>
              <textarea id="materialsNeeded" className="materialsNeeded"></textarea>
            </div>
          </div>
          <button className="button" type="submit">
            Create Course
          </button>
          <button
            className="button button-secondary"
            onclick={e => {e.preventDefault(); navigate('/');}}>Cancel</button>
        </form>
      </div>
    </main>

  );
};

export default CreateCourse;