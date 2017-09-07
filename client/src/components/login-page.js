import React from 'react';
import './login-page.css';
import Logo from './logo';
import Pronunciations from './pronunciations';
import {connect} from 'react-redux';
import AboutUs from './about-us';

export class LoginPage extends React.Component {
  
    render() {
        return (
            <div className='container-login'>
                <div className='login-box'>
                    <a href={'/api/auth/google'}><button className='login-button'>Login with Google</button></a>
                </div>
                    <Logo />
                    <Pronunciations />
                    <AboutUs />
                    <h2 className='come-heading'>COME LEARN WITH US!</h2>
            </div>
        )
    }
}

export default connect()(LoginPage)