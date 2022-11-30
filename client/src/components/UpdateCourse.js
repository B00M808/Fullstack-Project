import React from "react";

const UpdateCourse = () => {
  return <div>UpdateCourse</div>;
};

/*
The component renders a form????(do I make another file titled Form) allowing a user to update one of their existing courses, an "Update Course" button that when clicked sends a PUT request to the REST API's /api/courses/:id route, and a "Cancel" button that returns the user to the "Course Detail" screen.
//See Step 9 Restrict access to updating and deleting courses
//Step 10 Display validation errors
//Statefull
*/
/*
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

const value = e.target.value;
if (name === "courseTitle") {
  setTitle(value);
} else if (name === "courseDescription") {
  setDescription(value);
} else if (name === "estimatedTime") {
  setEstimatedMaterialsNeeded(value);  
} else if (name === "materialsNeeded") {
  setMaterialsNeeded(value);
} else {
  return;
}
};

const handleUpdate = (e) => {
  e.preventDefault();

  const body = {
    title,
    description,
    estimatedTime,
    materialsNeeded,
  };

  context.data
  .updateCourse(
    body,
    context.authenticatedUser.emailAddress,
    context.authenticatedUser.password
  )
  .then((errors) => {
    if (errors.length > 0) {
      setErrors(errors);
    } else {
      navigate("/");
    }
  })
  catch((errors) => {
    console.error(errors);
  });
};

const handleCancel = (e) => {
  e.preventDefault();
  navigate("/");
};
return (
        <div className="wrap">
              <h2>Update Course</h2>
              <form onSubmit={handleUpdate}>
                    <div class="main--flex">
                        <div>
                            <label for="courseTitle">Course Title</label>
                            <input 
                            id="courseTitle" 
                            className="courseTitle" 
                            type="text" 
                            defaultValue={course?.title}>
                            onChange{handleChange}
                            <label for="courseDescription">Course Description</label>
                            <textarea id="courseDescription" className="courseDescription"></textarea>
                        </div>
                        <div>
                            <label for="estimatedTime">Estimated Time</label>
                            <input id="estimatedTime" 
                            className="estimatedTime" 
                            type="text" 
                            defaultValue="14 hours"> //how do I update this
                            onChange{handleChange}
                            <label for="materialsNeeded">Materials Needed</label>
                            <textarea id="materialsNeeded" className="materialsNeeded"></textarea>
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
*/

export default UpdateCourse;
