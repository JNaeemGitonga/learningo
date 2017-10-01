import React from 'react';
import {connect} from 'react-redux';
import {setPassword,setConfirmPass,valid} from '../actions/index2';
import InputError from './inputerror';
import './login-page.css'
export class PasswordBoxes extends React.Component {
        
    setConfirm(q) {
        this.props.dispatch(setConfirmPass(q))
    }
    
    validate(dog) {
        if (dog === this.props.password) {
            console.log()
            this.props.dispatch(valid(true,false))
        } else {
            this.props.dispatch(valid(false,true))
        }
    }
    render() { 
       
        return (
            <div className='the-pass-box' >
                <div className='password-fields password1'>
                <label>Password </label>
                <input
                    className="password"
                    placeholder="Password"
                    onChange={(e) => {this.props.dispatch(setPassword(e.target.value))}}
                />
                </div>
                <div className='password-fields cpassword'>
                    <label>Confirm Password </label>
                <input
                    ref="confirmPassword"
                    type='password'
                    className="confirmPassword"
                    placeholder="Confirm password"
                    onChange={(e) => this.props.dispatch(setConfirmPass(e.target.value))}
                    onKeyUp={(e) =>{

                        this.validate(e.target.value)
                    }}
                />
                </div>
                {!this.props.valid && <InputError errorMessage={this.props.errorMessage} visible={this.props.errorVisible} />}
            </div>
        )
    }
}

export const mapStateToProps = state => {
    return{
        errorMessage:state.twoReducer.errorMessage,
        errorVisible:state.twoReducer.errorVisible,
        password:state.twoReducer.password,
        confirmPassword:state.twoReducer.confirmPassword
    }
}
export default connect(mapStateToProps)(PasswordBoxes) 