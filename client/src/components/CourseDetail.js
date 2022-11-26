import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CourseDetail = ({ context }) => {
  const [course, setCourse] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    context.data
      .getCourse(id)
      .then((data) => {
        console.log(data)
        setCourse(data)})
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (e) => {
   fetch("/api/courses/"+e.target.id).then(res => {
     return res.json()
    }).then(res => {
      console.log("deleted")
    }).catch((err) => console.log(err));
  }

  return  <main>
  <div className="actions--bar">
      <div className="wrap">
          <Link className="button" to="#">Update Course</Link>
          <button className="button" id={course?.id} onClick={handleDelete}>Delete Course</button>
          <Link className="button button-secondary" to="#">Return to List</Link>
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
              </div>
              <div>
                  <h3 className="course--detail--title">Estimated Time</h3>
                  <p>{course?.estimatedTime}</p>

                  <h3 className="course--detail--title">Materials Needed</h3>
                  <ul className="course--detail--list">
                      <li>{course?.materialsNeeded}</li>
                  </ul>
              </div>
          </div>
      </form>
  </div>
</main>
};

/* 
CourseDetail - This component provides the "Course Detail" screen by retrieving the detail for a course from the REST API's /api/courses/:id route and rendering the course. The component also renders a "Delete Course" button that when clicked should send a DELETE request to the REST API's /api/courses/:id route in order to delete a course. This component also renders an "Update Course" button for navigating to the "Update Course" screen.

//Statefull

//Mounted

//See Step 9 Restrict access to updating and deleting courses

//See Step 11 Add support for rendering markdown formatted text
*/

/*
componentDidMount() {
  const context = this.props;
  const id = this.props.match.params;
  context.data.getCourse(id)
  .then(course => {
    if (course) {
      this.setState({
        courseDetail: course
      });
    } else {
      this.props.history.push()
    }
  })
}
*/

//Delete Button 

export default CourseDetail;