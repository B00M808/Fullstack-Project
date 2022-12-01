import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ReactMarkdown from 'react-markdown'

/* 
CourseDetail - This component provides the "Course Detail" screen by retrieving the detail for a course from the REST API's /api/courses/:id route and rendering the course. The component also renders a "Delete Course" button that when clicked should send a DELETE request to the REST API's /api/courses/:id route in order to delete a course. This component also renders an "Update Course" button for navigating to the "Update Course" screen.

//The CourseDetail component only renders the "Update Course" and "Delete Course" buttons if:
There's an authenticated user.
The authenticated user's ID matches that of the user who owns the course.

//Statefull
//Mount to catch course details
//See Step 9 Restrict access to updating and deleting courses
//See Step 11 Add support for rendering markdown formatted text
/The "Course Detail" screen renders the course description and materialsNeeded properties as markdown formatted text. 
*/
//State is setup
const CourseDetail = ({ context }) => {
  const [course, setCourse] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    context.data
      .getCourse(id)
      .then((data) => {
        console.log(data)
        setCourse(data)
      })
      .catch((err) => console.log(err));
  }, []);

  //get delete function
  const handleDelete = (id) => {
    context.data
    .deleteCourse(id, context.authenticatedUser.email, context.authenticatedUser.password)
    .then(res => {
      navigate("/") 
      console.log("deleted")
    }).catch((err) => console.log(err));
  };

  return (
    <main>
      <div className="actions--bar">
        <div className="wrap">
          <Link className="button" to="{'/courses/id/update'}">Update Course</Link>
          <button className="button" id={course?.id} onClick={() => handleDelete(id)}>Delete Course</button>
          <Link className="button button-secondary" to="/">Return to List</Link>
        </div>
      </div>

      <div className="wrap">
        <h2>Course Detail</h2>
        <form>
          <div className="main--flex">
            <div>
              <h4 className="course--name">{course?.title}</h4>
              <p>by {course?.User?.firstName} {course?.User?.lastName}</p>

              <p>{course?.description}</p>
              <ReactMarkdown children={course?.description} />
            </div>
            <div>
              <h3 className="course--detail--title">Estimated Time</h3>
              <p>{course?.estimatedTime}</p>

              <h3 className="course--detail--title">Materials Needed</h3>
              <div className="course--detail--list">
                <ReactMarkdown children={course?.materialsNeeded} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}
  export default CourseDetail;