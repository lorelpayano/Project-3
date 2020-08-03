import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/404/NotFound.js";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";
import Profile from "./components/Profile";
import actions from "./services/index";
import GoogleAuth from "./components/auth/GoogleAuth";
import GoogleAuthLogin from "./components/auth/GoogleAuthLogin";
import Footer from "./components/Footer"
import Completed from './components/Completed';
import Ongoing from './components/Ongoing';
import NotStarted from './components/NotStarted';
// import Navbar from './components/Navbar';
import './index.css';
import About from './components/About';
import GetInspired from './components/GetInspired';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateProject from './components/CreateProject'
import DisplayProject from "./components/DisplayProject";


class App extends Component {
  state = {};

  async componentDidMount() {
    let user = await actions.isLoggedIn();
    this.setState({ ...user.data });
    console.log("coolest ");
  }

  setUser = (user) => this.setState(user);

  logOut = async () => {
    let res = await actions.logOut();
    this.setUser({ email: null, createdAt: null, updatedAt: null, _id: null }); //FIX
  };



  render() {
    return (
      <BrowserRouter>
 
      {/* <Navbar /> */}
     
        {this.state.email}

        <nav className='nav'>
        
          <NavLink className='nav-links' to="/">Home</NavLink>
          <NavLink className='nav-links' to="/about">About</NavLink>
          <NavLink className='nav-links' to="/getinspired">Get Inspired</NavLink>

          {this.state.email ? (
            <Fragment>
              <NavLink className='nav-links' onClick={this.logOut} to="/">Log Out</NavLink>
              <NavLink className='nav-links' to="/profile">Profile</NavLink>
            </Fragment>
          ) : (
            <Fragment>
              <NavLink className='nav-links' to="/sign-up">Sign Up</NavLink>
              <NavLink className='nav-links' to="/log-in">Log In</NavLink>
            </Fragment>
          )}
        </nav>


        <div style={{marginTop: '10vh'}}>

        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path='/about' render={() => <About />}/>
          <Route exact path='/getinspired' render={() => <GetInspired />}/>
          <Route exact path="/sign-up" render={(props) => <SignUp {...props} setUser={this.setUser} />}/>
          <Route exact path="/log-in" render={(props) => <LogIn {...props} setUser={this.setUser} />}/>
          <Route exact path="/profile" render={(props) => <Profile {...props} user={this.state} />}/>
          <Route exact path='/completed' render={() => <Completed />}/>
          <Route exact path='/ongoing' render={() => <Ongoing />}/>
          <Route exact path='/notstarted' render={() => <NotStarted />}/>
          <Route exact path='/createproject' render={(props ) => <CreateProject  {...props}/>}/>
          <Route exact path='/projects/:id' render={(props) => <DisplayProject {...props} />} />
          <Route exact path='' />


          <Route component={NotFound} />

        </Switch>

        {!this.state.email && <GoogleAuth setUser={this.setUser} />}
        {!this.state.email && <GoogleAuthLogin setUser={this.setUser} />}

        {/* {<Footer/>} */}
            </div>
      </BrowserRouter>
    );
  }
}
export default App;
