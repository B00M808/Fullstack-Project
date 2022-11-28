import React, { useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import CourseDetail from './components/CourseDetail';
import Courses from './components/Courses';
import CreateCourse from './components/CreateCourse';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import UpdateCourse from './components/UpdateCourse';
import UserSignIn from './components/UserSignIn';
import UserSignOut from './components/UserSignOut';
import UserSignUp from './components/UserSignUp';
import withContext from './Context';
//import PrivateRoute from './PrivateRoute';

const HeaderWithContext = withContext(Header);
const CoursesWithContext = withContext(Courses);
const UserSignInWithContext = withContext(UserSignIn);
const CourseDetailWithContext = withContext(CourseDetail);
const UserSignOutWithContext = withContext(UserSignOut);
const UserSignUpWithContext = withContext(UserSignUp);
//const AuthWithContext = withContext(Authenticated);

export const UserContext = createContext();
const App = () => {
  const [auth, setAuth] = useState(false);
  
  return (
    <UserContext.Provider value={{auth, setAuth}}>
      <HeaderWithContext />
      <Routes>
        <Route path="/" element={ <PrivateRoute Component={CoursesWithContext} /> } />
        <Route path="courses/:id" element={<CourseDetailWithContext />} />
        <Route path="/signin" element={<UserSignInWithContext />} />
        <Route path="/signup" element={<UserSignUpWithContext />} />
        <Route path="/signout" element={<UserSignOutWithContext />} />

      </Routes>
    </UserContext.Provider>
  );
};

export default App;
