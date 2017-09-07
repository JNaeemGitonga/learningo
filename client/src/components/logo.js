import React from 'react';
import {connect} from 'react-redux';
import './login-page.css';
import './float-grid.css';
import './logo.css';


export class Logo extends React.Component  {
    render() {
        return (
                <div id='logo' className='row logo-box'>
                    <a href='/questions' style={{textDecoration:'none', letterSpacing:'5px'}}><h1 id='appName'>Learningo!</h1></a>
                </div>
        )
    }

}

export default connect()(Logo)
