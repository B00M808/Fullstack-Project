import {useState, useEffect} from "react"

const Courses = () => {
const [courses, setCourses] = useState([])
useEffect(() => {
    fetch('http://localhost:5000/api/courses')
    .then(response => response.json())
    .then(json => setCourses(json))
  
}, []) 
{/* **useEffect, tells the useEffect to run one time*/}
  return (
    <div>
        {courses.map((course, key) => {
            return <div key={key}> 
                <h2>{course.title}</h2> 
                {/* **unique keys */}
            </div>
        })}
    </div>

  )
}

export default Courses