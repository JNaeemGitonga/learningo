import React from 'react';
import './login-page.css';
import Logo from './logo';
import Pronunciations from './pronunciations';
import {connect} from 'react-redux';

export class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display:'none',
            toggleDisplay: () => this.state.display === 'none' ? this.setState({display:'block'}) :  this.setState({display:'none'})
        }
    }

    render() {
        return (
            <div className='about-us'>
                <h2 className='about-heading'><a href='javascript:void(0)' onClick={() => this.state.toggleDisplay()}>About Us...</a></h2>
                <div style={{display:this.state.display}} className='about-container'>
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