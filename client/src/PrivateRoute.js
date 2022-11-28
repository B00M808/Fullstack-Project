import React, {useContext} from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({})
export default ({ component: Component, ...rest }) => {
    return (
      <Consumer>
        {context => (
          <Route
            {...rest}
            render={props => {
              const { authenticateUser } = context;
              if (authenticateUser) {
                return (
                  <Component {...props} />
                );
              } else {
                return (
                  <Redirect to={{
                  from: '/signin', 
                    state: {from: props.location } 
                  }} />
                );
              }
            }}
          />
        )}
      </Consumer>
    )