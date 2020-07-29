import React, { Component } from "react";

class Navbar extends Component {
    
  render() {
    return (
      <div>
        <nav>
          <NavLink to="/">Home |</NavLink>

          {this.state.email ? (
            <Fragment>
              <NavLink onClick={this.logOut} to="/">
                Log Out |
              </NavLink>
              <NavLink to="/profile">Profile|</NavLink>
            </Fragment>
          ) : (
            <Fragment>
              <NavLink to="/sign-up">Sign Up |</NavLink>
              <NavLink to="/log-in">Log In |</NavLink>
            </Fragment>
          )}
        </nav>
      </div>
    );
  }
}

export default Navbar;
