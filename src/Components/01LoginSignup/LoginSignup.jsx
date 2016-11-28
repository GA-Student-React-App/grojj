import React, { Component } from 'react';
// import './LoginSignup.css';
import './MattLoginSignup.css'

export default class LoginSignup extends Component {
  render() {
    return(
      <div id="loginSignup">
        <button className='close-btn' onClick={this.props.hideLogin}>X</button>
        <div id="login" className="loginModal">
          <h1>Login:</h1>
            <input onChange={this.props.trackLoginForm} type="text" placeholder="username" />
            <br></br>
            <input onChange={this.props.trackLoginForm} type="text" placeholder="password" />
            <br></br>
            <button id="show-pwd" className='modalButton'>Show Password</button>
            <br></br>
            <button onClick={this.props.postLogin} className="modalButton">Login</button>
        </div>
        <div id="dividingLine"></div>
        <div id="signup" className="loginModal">
          <h1>Signup:</h1>
            <input onChange={this.props.trackSignupForm} type="text" placeholder="username" />
            <br></br>
            <input onChange={this.props.trackSignupForm} type="text" placeholder="password" />
            <br></br>
            <button id='show-pwd' className='modalButton'>Show Password</button>
            <br></br>
            <button onClick={this.props.postSignup} className="modalButton">Sign Up</button>
            {/* <button id="loginSignupCancel" onClick={this.props.hideLogin}>Cancel</button> */}
        </div>
      </div>
    )
  }
}
