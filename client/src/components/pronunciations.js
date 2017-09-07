import React from 'react';
import {connect} from 'react-redux';
import './login-page.css';
import './float-grid.css';
import './logo.css';

export class Pronunciations extends React.Component  {
    render() {
        return (
                <div id='logo' className='row logo-box'>
                        <ul className='pronunciations'>
                            <li className='first'>/lear-níngo/</li>
                            <li className='second'>/learn-n-Go/</li>
                            <li className='third'>/learning-Ohh/</li>
                        </ul>
                </div>
        )
    }

}

export default connect()(Pronunciations)
