import React, { Component } from 'react';
import LoginFormContainer from './LoginForm/LoginFormContainer';

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to Pavilion</h1>
                <p>Test email: daxatep732@edmondpt.com</p>
                <p>Test pass: future124578</p>
                <LoginFormContainer login={this.props.login} isAuth={this.props.isAuth} onSubmit={this.props.onSubmit}  />
            </div>
        );
    }
}

export default Login;
