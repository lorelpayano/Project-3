import React, { Component, Fragment } from 'react';
import actions from '../../services/index';
import GoogleAuthLogin from "./GoogleAuthLogin";


class LogIn extends Component {
    state = {

    } 
    handleChange = e => this.setState({[e.target.name]: e.target.value})

    handleSubmit = e => {
        e.preventDefault()
        actions.logIn(this.state).then(async user=> {
            console.log(user.data)
            await this.props.setUser({...user.data})  
            this.props.history.push('/profile')
        }).catch(({ response }) => console.error(response.data));
    }
    render() {
        return (
            <Fragment>
            {/* <div className='login'>
                <h2>LogIn</h2>
                <form onSubmit={this.handleSubmit}>
                    <input name="email" type="email" onChange={this.handleChange} />
                    <input name="password" type="password" onChange={this.handleChange} />
                    <input type="submit" value="Log In"/>
                </form>

            </div> */}


            <div id="login-box" style={{width:'20%'}}>
                    <div class="left">
                        <h1>LogIn</h1>
                        
                        <form onSubmit={this.handleSubmit}>
                        <input type="text" name="name" placeholder="Email" onChange={this.handleChange} />
                        {/* <input type="email" name="email" placeholder="E-mail"  onChange={this.handleChange} /> */}
                        <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                        {/* <input type="password" name="password2" placeholder="Retype password" onChange={this.handleChange} /> */}
                        
                        <input type="submit" name="signup_submit" value="LogIn" />
                        </form>
                        <br />
                        {<GoogleAuthLogin {...this.props} setUser={this.props.setUser} />}  

                    </div>

                    {/* <div class="or">OR</div> */}
                    
                    {/* <div class="right">
                        <span class="loginwith">Sign in with<br />social network</span>
                        
                        <button class="social-signin facebook">Log in with facebook</button>
                        <button class="social-signin twitter">Log in with Twitter</button>
                        <button class="social-signin google">Log in with Google</button>
                    </div> */}
            </div>

            </Fragment>
        );
    }
}

export default LogIn;