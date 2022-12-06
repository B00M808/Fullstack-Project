import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components are set up
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

//Managed global state by utilizing the React Context API. Authenticated user and the user sign in and sign out methods get defined by using the Context API <Provider> component
export const UserContext = createContext();
const App = () => {
  const [auth, setAuth] = useState(false);
  const [authUser, setAuthUser] = useState({});
  return (
    <UserContext.Provider value={{ auth, setAuth, authUser, setAuthUser }}>
      <BrowserRouter>
        <Provider>
          <HeaderWithContext />
          {/*Necessary Routes are Set Up*/}
          <Routes> 
            <Route path="/" element={<CoursesWithContext />} />
            <Route path="courses/:id" element={<CourseDetailWithContext/>} />
            {/* Private Routes */}
            <Route path="courses/create" element={<PrivateRoute Component={CourseDetailWithContext} />} />
            {/* <Route path="courses/:id" element={Authenticateduser && <CourseDetailWithContext/>} /> */}
            <Route
              path="/courses/create/new"
              element={<PrivateRoute Component={CreateCoursewithContext} />}
            />
            <Route path="courses/:id/update" element={<PrivateRoute Component={UpdateCourseWithContext} />}/>
            {/* <Route element={withContext(PrivateRoute)} /> */}
            <Route path="/signin" element={<UserSignInWithContext />} />
            <Route path="/signout" element={<UserSignOutWithContext />} />
            <Route path="/signup" element={<UserSignUpWithContext />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
