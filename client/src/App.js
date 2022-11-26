import Courses from "./components/Courses.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseDetail from "./components/CourseDetail.js";


//Structure of component/Stateful component
import { useState } from "react";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

/*
//Object {}
import './App.css';
import {useState} from "react"
import CourseDetail from './CourseDetail';
function App() {
  const [courses, setCourses] = useState({})
  return (
    <div className="App">
      
    </div>
  );
}
*/
export default App;
