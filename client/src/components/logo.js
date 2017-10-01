import React from 'react';
import {connect} from 'react-redux';
import './login-page.css';
import './float-grid.css';
import './logo.css';
import {Link} from 'react-router-dom';


export class Logo extends React.Component  {
    render() {
        return (
                <div id='logo' className='row logo-box'>
                    <Link to='/' style={{textDecoration:'none', letterSpacing:'5px'}}><h1 id='appName'>Learningo!</h1></Link>
                </div>
        )
    }

}


export default connect()(Logo)
