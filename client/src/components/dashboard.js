import React from 'react';
import Logo from './logo';
import Pronunciations from './pronunciations';
import './login-page.css';
import dashboard from'./dashboard.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';


export class DashBoard extends React.Component {
    render() {
        return (

            <div className='dashboard-container'>
                <div className='logout-box'>
                    <Link to={'/api/auth/logout'}>
                    <button className='logout-button'>Logout</button></Link>
                </div>
                <Logo />
                <Pronunciations />
                <div className='welcome-container'>
                    <h1 className='greetings'>Peace Welcome Salaam Shalom Bienvenidos 你好</h1>
                     <p className='ready-quote'>ready to begin learning?</p>
                     <Link to='/questions'><p className='begin'>CLICK HERE</p></Link>
                </div>
            </div>
        )
    } 
}

export default connect()(DashBoard)