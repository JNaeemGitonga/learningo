import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import './login-page.css';
import './float-grid.css';
import logocss from './logo.css';


export class Logo extends React.Component  {
    render() {
        return (
                <div id='logo' className='row logo-box'>
                        <a href='/questions' style={{textDecoration:'none', letterSpacing:'5px'}}><h1 id='appName'>Learningo!</h1></a>
                        {/* <ul className='pronunciations'>
                            <li className='first'>/lear-níngo/</li>
                            <li className='second'>/learn-n-Go/</li>
                            <li className='third'>/learning-Ohh/</li>
                        </ul> */}
                </div>
        )
    }

}

export default connect()(Logo)
