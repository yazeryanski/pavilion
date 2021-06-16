import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const AuthRedirect = (Component) => {
    
    let mapStateToProps = (state) => ({
        isAuth: state.auth.isLogined,
    })

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to="/login" />
            }

            
            return  <Component {...this.props} /> 
        }
    }



    return connect(mapStateToProps, {})(RedirectComponent);
        
}

export default AuthRedirect;
