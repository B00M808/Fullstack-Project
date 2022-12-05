import React, { Component } from "react";
import Data from "./Data";

/* 
//Provider allows its child components to gain access, value represents an object containing the context to be shared throughout the component tree.
  */

//Passed context to the Provider, created a value object to provide the utility methods of the class Data
const Context = React.createContext();
export class Provider extends Component {
  constructor() {
    super();
    this.data = new Data();

//Working with the Sign In, then the statement will be true
    this.state = {
      authenticatedUser: null,
    };
  }

  //directs an auth user
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
    console.log(username,password);
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
