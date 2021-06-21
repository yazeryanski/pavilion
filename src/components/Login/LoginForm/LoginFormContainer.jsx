import React from 'react';
import { reduxForm } from 'redux-form'
import LoginForm from './LoginForm';


class LoginFormContainer extends React.Component {    
    render() {
        const WithReduxForm = reduxForm({ form: 'login' })(LoginForm);
            
        return (
            <div>
                <WithReduxForm {...this.props}/>
            </div>
        );
    }
}


export default LoginFormContainer
