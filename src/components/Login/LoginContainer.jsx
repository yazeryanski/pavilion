import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import {login} from '../../Redux/Reducers/authReducer';
import { Redirect } from 'react-router-dom';

class LoginContainer extends Component {
    submit = (value) => {
        console.log(this.props.login(value.email, value.password, value.rememberMe));
    }
    
    render() {
        if (this.props.isAuth) {
            return <Redirect to="/profile" />
        }
        
        return (
            <div>
                <Login onSubmit={this.submit}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuth: state.auth.isLogined
})

export default connect(mapStateToProps, {login})( LoginContainer );
