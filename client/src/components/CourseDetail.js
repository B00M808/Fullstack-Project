import React, { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { UserContext } from "../App";

/* 
CourseDetail - This component provides the "Course Detail" screen by retrieving the detail for a course from the REST API's /api/courses/:id route and rendering the course. The component also renders a "Delete Course" button that when clicked should send a DELETE request to the REST API's /api/courses/:id route in order to delete a course. This component also renders an "Update Course" button for navigating to the "Update Course" screen.

//The CourseDetail component only renders the "Update Course" and "Delete Course" buttons if:
There's an authenticated user.
The authenticated user's ID matches that of the user who owns the course.

//Mount to catch course details
//See Step 9 Restrict access to updating and deleting courses
*/

//State setup
const CourseDetail = ({ context }) => {
  const [course, setCourse] = useState([]);
  const { authUser } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();

  //Fetch course from the database
  useEffect(() => {
    context.data
      .getCourse(id)
      .then((data) => {
        console.log(data);
        setCourse(data);
      })
    .catch((err) => console.log(err));
  }, []); // eslint-disable-line

  //get delete function
  const handleDelete = async (id) => {
    await context.data.deleteCourse(id, authUser.email, authUser.password)
    .then(() => {navigate("/")});
  };
  //Set up a ternary operator to see if the user is the owner of the course before rendering the buttons
  return (
    <main>
      <div className="actions--bar">
        <div className="wrap">
          {course?.User?.emailAddress === authUser.email ? (
            <>
              <Link className="button" to={`/courses/${id}/update`}>
                Update Course
              </Link>
              <button
                className="button"
                id={course?.id}
                onClick={() => handleDelete(id)}
              >
                Delete Course
              </button>
            </>
          ) : null}
          <Link className="button button-secondary" to="/">
            Return to List
          </Link>
        </div>
      </div>

      <div className="wrap">
        <h2>Course Detail</h2>
        <form>
          <div className="main--flex">
            <div>
              <h4 className="course--name">{course?.title}</h4>
              <p>
                by {course?.User?.firstName} {course?.User?.lastName}
             </p> 
              <ReactMarkdown children={course?.description} /> {/* Created added support for rendering markdown formatted text */}
            </div>
            <div>
              <h3 className="course--detail--title">Estimated Time</h3>
              <p>{course?.estimatedTime}</p>

              <h3 className="course--detail--title">Materials Needed</h3>
              <div className="course--detail--list">
                <ReactMarkdown children={course?.materialsNeeded} />  {/*Created added support for rendering markdown formatted text */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};
export default CourseDetail;
