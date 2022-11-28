import { response } from "express";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateCourse from './UpdateCourse';
/*
The component renders a form????(do I make another file titled Form) allowing a user to update one of their existing courses, an "Update Course" button that when clicked sends a PUT request to the REST API's /api/courses/:id route, and a "Cancel" button that returns the user to the "Course Detail" screen.
//See Step 9 Restrict access to updating and deleting courses
//Step 10 Display validation errors
//Statefull
*/

//State is setup 
const updateData = {
  title: course.title,
  description: course.description,
  estimatedTime: course.estimatedTime,
  materialsNeeded: course.materialsNeeded,
  userId: course.userId,
};

const email = loggedInUser.email;
const password = loggedInUser.password;
//Authurization goes here

fetch(url, {
  method: "PUT",
  headers: headers,
  body: JSON.stringify(updateData),
})
.then((response) => response.json())
.then((json) => {
  if(json.id) {
  props.history.push('/courses');
} else {
  setErrorMessage(json.errors);
}
});

return (
  <header>
          <div className="wrap header--flex">
                <h2>Update Course</h2>
                <form>
                    <div class="main--flex">
                        <div>
                            <label for="courseTitle">Course Title</label>
                            <input id="courseTitle" name="courseTitle" type="text" value="Build a Basic Bookcase">
                            <label for="courseDescription">Course Description</label>
                            <textarea id="courseDescription" name="courseDescription"></textarea>
                        </div>
                        <div>
                            <label for="estimatedTime">Estimated Time</label>
                            <input id="estimatedTime" name="estimatedTime" type="text" value="14 hours">

                            <label for="materialsNeeded">Materials Needed</label>
                            <textarea id="materialsNeeded" name="materialsNeeded"></textarea>
                        </div>
                    </div>
                    <button className="button" type="submit">Update Course</button>
                    <Link className="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">
                      Cancel
                      </button>
                    </div>
                </form>
          </div>
    </div>
)

export default UpdateCourse;