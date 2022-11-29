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
      }
    }
    //Passed context to the Provider,Create a value object to provide the utility methods of the class Data. 
    //Provider allows its child components to gain access, value represents an object containing the context to be shared throughout the component tree
    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    )
  };

  signIn = async (emailAddress, password) => { 
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

  //Removed User from State
  signOut = () => {
    this.setState({ authenticatedUser: null });
  };
}

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */
//withContext automatically connects the component passed to it to all actions and context changes, further, it will share user authentication data and actions throughout the app.


export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>
        {(context) => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  };
}

export const Consumer = Context.Consumer;
