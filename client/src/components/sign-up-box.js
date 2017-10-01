import React from 'react';
import {connect} from 'react-redux';
import {createUser} from '../actions/index2';
import PasswordBoxes from './password-boxes';
import Logo from './logo'
import './login-page.css';

export class SignUpBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            display:'none',
            showModal: () => this.setState({display:'block'}),
            showError: () => this.setState({errorMessage:'block'}),
            errorMessage:'none',
            firstName:null,
            lastName:null,
            email:null
        
        }
    }

    render(){

        const modalStyle = {
            display: `${this.state.display}`, /* Hidden by default */
            position: 'fixed', /* Stay in place */
            zIndex: '1', /* Sit on top */
            paddingTop: '100px', /* Location of the box */
            left: '0',
            top: '0',
            width: '100%', /* Full width */
            height: '100%', /* Full height */
            overflow: 'auto', /* Enable scroll if needed */
            backgroundColor: 'rgba(0,0,0,0.9)' /* Black w/ opacity */
        }
        const modalContent = {
            margin: 'auto',
            display: 'block',
            color: '#f1f1f1',
            textAlign: 'center'
        }
        const closeStyle = {
            position: 'absolute',
            top: '15px',
            right: '35px',
            color: '#f1f1f1',
            fontSize: '40px',
            fontWeight: 'bold',
        }
        
        let x = this.props;
        let y = this.state;
        
        return (
            <div className='signup-outter-box'>
                <Logo />
                <form className="signup-form pure-form-aligned" onSubmit={e => {
                    e.preventDefault()
                    for ( let key in x){
                        console.log(key)
                        if(x[key] === null){
                           return alert('Please fill in all fields.')
                        }
                    }
                    return x.dispatch(createUser(y.email,x.password,y.firstName,y.lastName))
                }}>
                    <div className="email pure-control-group">
                        <label  htmlFor="email">Email </label>
                        <input className='form' id="email" type="text" placeholder="abc@company.com"
                        onChange={(e) => {
                            this.setState({email:e.target.value})}}/>
                    </div>

                    
            
                    <div className="pure-control-group">
                        <label  htmlFor="first-name">First Name </label>
                        <input className='form' id="first-name" type="first-name" placeholder="Juan"
                        onChange={(e) => this.setState({firstName:(e.target.value)})}/>
                    </div>

                    <div className="pure-control-group">
                        <label  htmlFor="last-name">Last Name </label>
                        <input className='form' id="last-name" type="last-name" placeholder="Johnson"
                        onChange={(e) => this.setState({lastName:(e.target.value)})}/>
                    </div>
                    <PasswordBoxes/>
                    <div className="pure-controls">
                       
                        <button type="submit" className="btn pure-button-primary">Submit</button>
                    </div>
            </form>
            <div className="modal" style={modalStyle}>
                <span><a href="#" style={closeStyle} className="close" onClick={() => this.setState({display:'none'})}>x</a></span>
                <h1 className="modal-content" style={modalContent}>Terms and Conditions</h1>
                <h2 style={modalContent}>You are now about to submit your personal information
                            to Connex. Some of it will be shared with other Connex members. If you agree
                            to these terms please close this window and indicate that you have read these
                            terms and conditions and click submit.
                </h2>
            </div>
            </div>
        )
    }
}
export const mapStateToProps = (state,props) => {
    const userId = props.match.params.userId;
    return{
        userId,
        password:state.twoReducer.password
    }
}
export default connect(mapStateToProps)(SignUpBox);


