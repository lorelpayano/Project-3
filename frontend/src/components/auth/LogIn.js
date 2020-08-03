import React, { Component, Fragment } from 'react';
import actions from '../../services/index'
import GoogleAuth from "./GoogleAuth";
import GoogleAuthLogin from "./GoogleAuthLogin";


class LogIn extends Component {

    state = {

    } 
    handleChange = e => this.setState({[e.target.name]: e.target.value})

    handleSubmit = e => {
        e.preventDefault()
         actions.logIn(this.state).then(user => {
            this.props.setUser({...user.data})  
        }).catch(({ response }) => console.error(response.data));
    }
    render() {
        return (
            <Fragment>
            <div className='login'>
                <h2>LogIn</h2>
                <form onSubmit={this.handleSubmit}>
                    <input name="email" type="email" onChange={this.handleChange} />
                    <input name="password" type="password" onChange={this.handleChange} />
                    <input type="submit" value="Log In"/>
                </form>


        {<GoogleAuth setUser={this.props.setUser} />}
        {<GoogleAuthLogin setUser={this.props.setUser} />}

            </div>
            </Fragment>
        );
    }
}

export default LogIn;