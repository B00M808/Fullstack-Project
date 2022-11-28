import React, {useState} from "react";
//import { useNavigate } from "react-router-dom"

/* 
//See Step 10 Display validation errors
-Create Course" screens display validation errors returned from the REST API.
//Statefull
*/

/*

const CreateCourse = () => {
  return (
    <div>CreateCourse</div>
  )
}

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

const handleSubmit = (e) => {
  e.preventDefault()
  const course = {title: title.current.value, description: description.current.value, estimatedTime: estimatedTime}
  context.data.createCourse(course)
  .then(res => {
    if (res.length !== 0) {
                <div className="validation--errors">
                    <h3>Validation Errors</h3>
                    <ul>
                      {res.map((error, i) => <li key={i}>(error)</li>)}
                    </ul>
                </div>)
      } else {
        navigate('/')
      }
  .catch(err => {
    navigate('/error')
  });

return (
  <main>
    <div className="wrap">
      <h2>Create Course</h2>
      /////{valErrors}
      <form onSubmit={handleSubmit}>
                    <div class="main--flex">
                        <div>
                            <label for="courseTitle">Course Title</label>
                            <input id="courseTitle" name="courseTitle" type="text" ref={title}/>
                            <label for="courseDescription">Course Description</label>
                            <textarea id="courseDescription" name="courseDescription" ref={description}></textarea>
                        </div>
                        <div>
                            <label for="estimatedTime">Estimated Time</label>
                            <input id="estimatedTime" name="estimatedTime" type="text" ref={estimatedTime}/>

                            <label for="materialsNeeded">Materials Needed</label>
                            <textarea id="materialsNeeded" name="materialsNeeded" ref={materialsNeeded}></textarea>
                        </div>
                    </div>
                    <button className="button" type="submit">Create Course</button><button className="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button>
                </form>
            </div>
        </main>
  )
}

export default CreateCourse;
*/