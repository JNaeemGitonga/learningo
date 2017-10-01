import React from 'react';
import './login-page.css';
import Logo from './logo';
import Pronunciations from './pronunciations';
import {connect} from 'react-redux';
import AboutUs from './about-us';
import LoginBox from './login-box';
import {Link} from 'react-router-dom';

export class LoginPage extends React.Component {
  
    render() {
        return (
            <div className='container-login'>
                <div className='login-box'>
                </div>
                    <Logo />
                    <Pronunciations />
                    <AboutUs />
                    <h2 className='come-heading'>COME LEARN WITH US!</h2>
                    <LoginBox />
            </div>
        )
    }
}

export default connect()(LoginPage)