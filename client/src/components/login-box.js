import React from 'react';
import './login-page.css';
import {connect} from 'react-redux';
import {login} from '../actions/index2';
import {Link} from 'react-router-dom';
import './login-page.css';

export class LoginBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password:null,
            username:null
        } 
    }
    render() {
        
        return (
            <div className='login '>
                <form className='login-form' onSubmit={e => {
					e.preventDefault()
					this.props.dispatch(login(this.state.username,this.state.password))}}>
                <div className="form-group1">
                  <label className='login-label' htmlFor='email' >Email: </label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email"
				  onChange={(e) => {
					 this.setState({username:e.target.value})
			    }}/>
                </div>
                <div className="form-group2">
                  <label className='login-label' htmlFor="pwd">Password: </label>
                  <input type="password" className="form-control" id="pwd" placeholder="Enter password"
				  onChange={(e) => {
                    this.setState({password:e.target.value})}}/>
                </div>
               
                <button type="submit" className="btn btn-default">Submit</button>
                <Link to='/signup'><p className='link' >Sign Up</p></Link>
                <p className='link demo' onClick={() => {
                    this.props.dispatch(login('demo@dummy.com','123445asdfk'))    
                }}>Demo Acct</p>
              </form>
            </div>
        )
    }
}

export default connect()(LoginBox)