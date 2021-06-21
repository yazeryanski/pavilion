import React from 'react';
import { Field } from 'redux-form'
import validator from "../../../common/validators";

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)


class LoginForm extends React.Component {

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Field name="email" component={renderField} type="text" label={'email'} validate={ validator.required, validator.email } /> <br />
                <Field name="password" component={renderField} type="password" validate={ validator.required }  /> <br />
                <label htmlFor="rememberMe">
                    <Field name="rememberMe" component={renderField} type="checkbox" id="rememberMe" />
                </label>

                <button>Login</button>
            </form>
        )
    };

}

export default LoginForm
