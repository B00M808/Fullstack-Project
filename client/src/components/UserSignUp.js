import { useEffect } from "react";
import { Navigate } from "react-router-dom";
/*
//Statefull
//See Step 10 Display validation errors
The "Sign Up" displays validation errors returned from the REST API.
*/
/*
const UserSignUp = () => {
  submit = () => {
    ...
      context.data.createUser(user)
        .then( errors => {
          if (errors.length) {
            ...
          } else {
            context.actions.signIn(username, password)
              .then(() => {
                this.props.history.push('/authenticated');    
              });
          }
        })
        .catch((err) => {...});
  }
 
  return (
    <div>UserSignUp</div>
  )
}

export default UserSignUp;
*/

import React from 'react'

const UserSignUp = () => {
  return (
    <div>UserSignUp</div>
  )
}

export default UserSignUp