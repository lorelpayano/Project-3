import React, { Component, Fragment } from 'react';
import actions from '../../services/index'
import GoogleAuth from "./GoogleAuth";
import GoogleAuthLogin from "./GoogleAuthLogin";

class SignUp extends Component {
    state = {

    } 
    handleChange = e => this.setState({[e.target.name]: e.target.value})

    handleSubmit =  e => {
        e.preventDefault()
        actions.signUp(this.state).then(async user=> {
            console.log(user.data)
            this.props.history.push('/profile')
            this.props.setUser({...user.data})  
        }).catch(({ response }) => console.error(response.data));
    }
    render() {
        return (
            <Fragment>
                {/* <h2>SignUP</h2>
                <form onSubmit={this.handleSubmit}>
                    <input name="name" type="text" onChange={this.handleChange} />
                    <input name="email" type="email" onChange={this.handleChange} />
                    <input name="password" type="password" onChange={this.handleChange} />
                    <input type="submit" value="Sign Up"/>
                </form> */}



                <div id="login-box">
                    <div class="left">
                        <h1>Sign up</h1>
                        
                        <form onSubmit={this.handleSubmit}>
                        <input type="text" name="name" placeholder="Name" onChange={this.handleChange} />
                        <input type="text" name="email" placeholder="E-mail"  onChange={this.handleChange} />
                        <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                        <input type="password" name="password2" placeholder="Retype password" onChange={this.handleChange} />
                        
                        <input type="submit" name="signup_submit" value="Sign me up" />
                        </form>

                    </div>

                    <div class="or">OR</div>
                    
                    <div class="right">
                        {/* <span class="loginwith">Sign in with<br />social network</span> */}
                        
                        {/* <button class="social-signin facebook">Log in with facebook</button>
                        <button class="social-signin twitter">Log in with Twitter</button> */}
                        {/* <button class="social-signin google">Log in with Google</button> */}
                        {<GoogleAuth class="social-signin google" setUser={this.props.setUser} />}
                        {<GoogleAuthLogin setUser={this.props.setUser} />}  
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default SignUp;