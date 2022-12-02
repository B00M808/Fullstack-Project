/*

/*
import React, { useState, createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CourseDetail from './components/CourseDetail';
import Courses from './components/Courses';
import CreateCourse from './components/CreateCourse';
import Header from './components/Header';
import UpdateCourse from './components/UpdateCourse';
import UserSignIn from './components/UserSignIn';
import UserSignOut from './components/UserSignOut';
import UserSignUp from './components/UserSignUp';
import withContext from './Context';
import PrivateRoute from './PrivateRoute';
function App() {
  return (
    <BrowserRouter>
      {withContext(<Header/>)}
      <Routes>    
        <Route path="courses/:id" element={withContext(<CourseDetail/>)} />
        <Route path="/" element={withContext(<Courses/>)} />
        <Route path="/courses/create" element={withContext(<CreateCourse/>)} />
        <Route path="courses/:id/update" element={withContext(<UpdateCourse/>)} />
        <Route element={withContext(PrivateRoute)} />
        <Route path="/signin" element={withContext(<UserSignIn/>)} />
        <Route path="/signout" element={withContext(<UserSignOut/>)} />
        <Route path="/signup" element={withContext(<UserSignUp/>)} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
*/

import React, { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CourseDetail from "./components/CourseDetail";
import Courses from "./components/Courses";
import CreateCourse from "./components/CreateCourse";
import Header from "./components/Header";
import UpdateCourse from "./components/UpdateCourse";
import UserSignIn from "./components/UserSignIn";
import UserSignOut from "./components/UserSignOut";
import UserSignUp from "./components/UserSignUp";
import withContext, { Provider } from "./Context";
import PrivateRoute from "./PrivateRoute";

const HeaderWithContext = withContext(Header);
const CoursesWithContext = withContext(Courses);
const UserSignInWithContext = withContext(UserSignIn);
const CourseDetailWithContext = withContext(CourseDetail);
const UserSignOutWithContext = withContext(UserSignOut);
const UserSignUpWithContext = withContext(UserSignUp);
const CreateCoursewithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);

export const UserContext = createContext();
const App = () => {

  return (
    
    <React.Fragment>
      <BrowserRouter>
        <Provider>
          <HeaderWithContext />
          <Routes>
          <Route path="/" element={<CoursesWithContext/>} />
            <Route path="courses/:id" element={<CourseDetailWithContext/>} />
            {/* <Route path="courses/:id" element={Authenticateduser && <CourseDetailWithContext/>} /> */}
            <Route
              path="/courses/create"
              element={<CreateCoursewithContext />} />
            <Route
              path="courses/:id/update"
              element={<UpdateCourseWithContext/>} />
            {/* <Route element={withContext(PrivateRoute)} /> */}
            <Route path="/signin" element={<UserSignInWithContext/>} />
            <Route path="/signout" element={<UserSignOutWithContext/>} />
            <Route path="/signup" element={<UserSignUpWithContext/>} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
