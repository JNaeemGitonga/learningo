import React from 'react';
import './login-page.css';
import Logo from './logo';
import Pronunciations from './pronunciations';
import {connect} from 'react-redux';

export class AboutUs extends React.Component {
    

    render() {
        return (
            <div className='about-us'>
                <h2 className='about-heading'>About Us...</h2>
                <div className='about-container'>
                    <p className='aboutUs'>Practice, practice, practice! Inside you'll find 
                        subjects to practice and if you don't find one you need, soon
                        you will be able to create your own lesson! Login with Google, and
                        choose a subject to begin!
                        </p>
                    </div>
                </div>
        )
    }
}

export const mapStateToProps = state => {
    return{

    }
}
export default connect(mapStateToProps)(AboutUs)