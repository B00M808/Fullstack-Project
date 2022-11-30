/*
import React, { Component, useState } from "react";
import Data from "./Data";
export function Provider (props) {
  const signIn = async (emailAddress, password) => { 
    const user = await this.data.getUser(emailAddress, password); 
    if (user !== null) {
      user.password = password;
      this.setState(() => {
        return {
          authenticatedUser: user,
        }
      });
    }
    return user;
  }
//function called to update state, setAuthenticatedUser, set the data to null

  const signOut = () => {
    setAuthenticatedUser(null);
  };
  const {authenticatedUser, setAuthenticatedUser} = useState(null); 
  const data = new Data();
  const value = {
    authenticatedUser,
    data: this.data,
    actions: {
      signIn,
      signOut,
    }
  }
  //Passed context to the Provider,Create a value object to provide the utility methods of the class Data. 
  //Provider allows its child components to gain access, value represents an object containing the context to be shared throughout the component tree
  return (
    <Context.Provider value={value}>
      {this.props.children}
    </Context.Provider>
  )
}
*/
import React, { Component } from "react";
import Data from "./Data";

const Context = React.createContext();

export class Provider extends Component {
  constructor() {
    super();
    this.data = new Data();

    this.state = {
      authenticatedUser: null,
    };
  }

  render() {
    const { authenticatedUser } = this.state;
    const value = {
      authenticatedUser,
      data: this.data,
      actions: {
        signIn: this.signIn,
        signOut: this.signOut,
      },
    };
    return (
      <Context.Provider value={value}>{this.props.children}</Context.Provider>
    );
  }

  signIn = async (username, password) => {
    const user = await this.data.getUser(username, password);
    const plainText = password;

    if (user !== null) {
      user.password = plainText;
      this.setState(() => {
        return {
          authenticatedUser: user,
        };
      });
    }
    return user;
  };

  signOut = () => {
    this.setState({ authenticatedUser: null });
  };
}

export const Consumer = Context.Consumer;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */

export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>
        {(context) => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  };
}
