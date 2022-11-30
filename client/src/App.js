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

import React, { useState, createContext } from "react";
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
//const AuthWithContext = withContext(Authenticated);

export const UserContext = createContext();
const App = () => {
  // const [auth, setAuth] = useState(false);

  return (
    /*
    Because done as class component void
    <UserContext.Provider value={{auth, setAuth}}>
    */
    <React.Fragment>
      <BrowserRouter>
        <Provider>
          <HeaderWithContext />
          <Routes>
            <Route path="/" element={<CoursesWithContext />} />
            <Route
              path="courses/:id"
              element={<PrivateRoute Component={CourseDetailWithContext} />} />
            <Route
              path="/signin"
              element={<PrivateRoute Component={UserSignInWithContext} />} />
            <Route
              path="/signup"
              element={<PrivateRoute Component={UserSignUpWithContext} />} />
            <Route
              path="/signout"
              element={<PrivateRoute Component={UserSignOutWithContext} />} />
            <Route path="courses/:id" element={withContext(CourseDetail)} />
            <Route
              path="/courses/create"
              element={<CreateCoursewithContext />} />
            <Route
              path="courses/:id/update"
              element={withContext(UpdateCourse)} />
            <Route element={withContext(PrivateRoute)} />
            <Route path="/signin" element={withContext(UserSignIn)} />
            <Route path="/signout" element={withContext(UserSignOut)} />
            <Route path="/signup" element={withContext(UserSignUp)} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </React.Fragment>
    /*</UserContext.Provider>*/
  );
};

export default App;
