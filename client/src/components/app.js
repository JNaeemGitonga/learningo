import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {ConnectedRouter as Router} from 'react-router-redux'
import QuestionPage from './question-page';
import LoginPage from './login-page';
import DashBoard from './dashboard';
import Lesson from './lesson';
import SignUpBox from './sign-up-box';
import {logon} from '../actions';
import {history} from '../store';


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        };
    }
    
    render() {
        
        return (
            <Router history={history}>
                <div className='app'>
                    <main>
                        <Route exact path='/' component={LoginPage} />
                        <Route exact path='/signup' component={SignUpBox} />
                        <Route  exact path='/home/:userId' component={DashBoard}  />
                        <Route  exact path='/:userId/questions' component={QuestionPage}/>
                        <Route  exact path='/:userId/lesson' component={Lesson}/>
                    </main>
                </div>
            </Router>
        )
    }
}
const mapStateToProps = state => {
    return {
        currentUser:state.learnReducer.currentUser,
        questions:state.learnReducer.questions,
        jwt:state.learnReducer.jwt
    } 
}
export default connect(mapStateToProps)(App)