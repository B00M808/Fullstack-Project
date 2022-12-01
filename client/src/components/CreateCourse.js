import React, { useState } from "react";
import axios from "axios";
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
  const [course, setCourse] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const course = {

    }
  }

  return (
    <main>
      <div className="wrap">
        <h2>Create Course</h2>
        <div className="validation--errors">
          <h3>Validation Errors</h3>
          </div>
        <form onSubmit={handleSubmit}>
          <div className="main--flex">
            <div>
              <label htmlFor="courseTitle">Course Title</label>
              <input
                id="courseTitle"
                name="courseTitle"
                type="text"
                value={course.title}
                onChange={(e) =>
                  setCourse({ ...course, title: e.target.value })
                }
              />
              <label htmlFor="courseDescription">Course Description</label>
              <textarea
                id="courseDescription"
                name="courseDescription"
                value={course.description}
                onChange={(e) =>
                  setCourse({ ...course, description: e.target.value })
                }
              ></textarea>
            </div>
            <div>
              <label htmlFor="estimatedTime">Estimated Time</label>
              <input
                id="estimatedTime"
                name="estimatedTime"
                type="text"
                value={course.estimatedTime}
                onChange={(e) =>
                  setCourse({ ...course, estimatedTime: e.target.value })
                }
              />

              <label htmlFor="materialsNeeded">Materials Needed</label>
              <textarea
                id="materialsNeeded"
                name="materialsNeeded"
                value={course.materialsNeeded}
                onChange={(e) =>
                  setCourse({ ...course, materialsNeeded: e.target.value })
                }
              ></textarea>
            </div>
          </div>
          <button
            className="button button-secondary"
            NameName="button"
            type="submit"
          >
            Create Course
          </button>
          <button
            className="button button-secondary"
            onClick="event.preventDefault(); location.href='index.html';"
          >
            Cancel
          </button>
        </form>
      </div>
    </main>
  );
};
/*
const handleCreate = () => {
  const body = {
    userId: context.authenticatedUser.id,
    title: title.current.value,
    description: description.current.value,
    estimatedTime: estimatedTime.current.value,
    materialsNeeded: materialsNeeded.current.value,
  };

  context.data.createCourse(
  body.userId,
  context.authenticatedUser.email,
  context.authenticatedUser.password,
  body
  );  
};

const handleCancel = (e) => {
  e.preventDefault()
  navigate('/')
}



return (
  
  )
}
*/
export default CreateCourse;
