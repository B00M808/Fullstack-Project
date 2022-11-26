import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetail = ({ context }) => {
  const [courses, setCourses] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    context.data
      .getCourse(id)
      .then((data) => setCourses(data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>CourseDetail</div>;
};

/* 
CourseDetail - This component provides the "Course Detail" screen by retrieving the detail for a course from the REST API's /api/courses/:id route and rendering the course. The component also renders a "Delete Course" button that when clicked should send a DELETE request to the REST API's /api/courses/:id route in order to delete a course. This component also renders an "Update Course" button for navigating to the "Update Course" screen.
//Statefull

//Mounted

//See Step 9 Restrict access to updating and deleting courses

//See Step 11 Add support for rendering markdown formatted text
*/

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

//Delete Button 

export default CourseDetail;