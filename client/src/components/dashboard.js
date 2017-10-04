import React from 'react';
import Logo from './logo';
import Pronunciations from './pronunciations';
import './login-page.css';
import './dashboard.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';


export class DashBoard extends React.Component {
    render() {
      
        return (

            <div className='dashboard-container'>
                <div className='logout-box'>
                    <Link to={'/api/auth/learningo/logout'}>
                    <button className='logout-button'>Logout</button></Link>
                </div>
                <Logo />
                <Pronunciations />
                <div className='welcome-container'>
                <h1 className='greetings'>Peace Welcome Salaam Shalom Bienvenidos 你好</h1>
                <h2 className='what-to-do'>What to do...</h2>
                    <ul>
                        <li className='instructions'>On the next page you will find a drop down box
                            with a list of subjects</li>
                        <li className='instructions'> Pick form the one you want and begin</li>
                        <li className='instructions'> you will enter your answer choices and press 
                            submit to answer</li>
                        <li className='instructions'>Hints and special characters are available if needed!</li>
                    </ul>
                     <p className='ready-quote'>ready to begin learning?</p>
                     <Link to={`/${this.props.userId}/questions`}><p className='begin'>CLICK HERE</p></Link>
                </div>
            </div>
        )
    } 
}

const mapStateToProps = (state) => {
    return {
        userId:state.twoReducer.userId



    }
}
export default connect(mapStateToProps)(DashBoard)