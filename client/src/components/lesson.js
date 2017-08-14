import React from 'react';
import {connect} from 'react-redux';
import Logo from './logo';
import {Link} from 'react-router-dom'
import {startLesson, nextQuestion, enqueueIt, logon} from '../actions';
import lesson from './lesson.css';
import floatGrid from './float-grid.css';
import {addUniqueA, addUniqueE, addUniqueI, addUniqueO, addUniqueU, addUniqueUU} from './functions.js'

class Lesson extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            display:'none',
            switchDisplay: () =>{
                if (this.state.display === 'none' ){
                   return this.setState({display:'inline-block'})
                }
                else if (this.state.display === 'inline-block') {
                   return this.setState({display:'none'})
                }
            },
            correctCount: 0
        }
    }
    componentDidMount() {
        this.props.dispatch(logon())
        this.props.dispatch(startLesson())
    }
    render() {
        let element = document.getElementById("answer")
        let question = this.props.currentQuestion;
        let lessonPlan;
        let q = this.props.questionQueue;
        const hintStyle = {
            display:this.state.display,
            marginBottom:'-105px'
        }
        if (this.props.questions) {

            lessonPlan = this.props.questions.map(lesson => lesson.language)
        }
        const addUniqueA = () => {
            let x = document.getElementById('anchorA').getAttribute('target')
            element.value = `${element.value}${x}`
        }

        const addUniqueE = () => {
            let x = document.getElementById('anchorE').getAttribute('target')
            element.value = `${element.value}${x}`
        }

        const addUniqueI = () => {
            let x = document.getElementById('anchorI').getAttribute('target')
            element.value = `${element.value}${x}`
        }

        const addUniqueO = () => {
            let x = document.getElementById('anchorO').getAttribute('target')
            element.value = `${element.value}${x}`
        }

        const addUniqueU = () => {
            let x = document.getElementById('anchorU').getAttribute('target')
            element.value = `${element.value}${x}`
        }

        const addUniqueUU = () => {
            let x = document.getElementById('anchorUU').getAttribute('target')
            element.value = `${element.value}${x}`
        }
        return (
            <div id='question-container'>
                 <div className='logout-box'>
                    <a href={'/api/auth/logout'}><button className='logout-button'>Logout</button></a>
                </div>
                <Logo />
                <div className='lesson-box'>
                    <ul className="question-list">
                         <h2 className='lesson-name'>{this.props.questions[this.props.lesson].language}</h2>
                    </ul>
                    <p className='actual-question'>{question}</p>
                    <h4 className='correct-count'>Correct Count  {this.state.correctCount}</h4>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        {/* let element = document.getElementById("answer") */}
                        if (this.state.display === 'inline-block') {
                            this.state.switchDisplay()
                        }
                        if (this.props.answer != element.value) {
                            console.log(element.value,'this question was queued')
                            this.props.dispatch(enqueueIt(q))
                            this.props.dispatch(nextQuestion()) 
                            element.value = ''
                        }
                        else{ 
                        this.setState({correctCount:this.state.correctCount + 1})
                        this.props.dispatch(nextQuestion())
                        element.value = '';
                    }}}>
                    <input id='answer'placeholder='answer' style={{color:'black', fontFamily:"'Roboto', sans-serif"}} ></input>
                    <input id="button" type="submit" value="Submit" />
                    </form>
                    <p className='hint' style={hintStyle}>{this.props.translation}</p>
                    <div className='blank'></div>
                    <Link id='hint' type='text' to='#' onClick={() => this.state.switchDisplay()}>Need a hint?</Link>
                    <h2 className='special-characters-heading'>Special Characters</h2>
                    <div className='special-characters' style={{fontFamily:"'Roboto', sans-serif"}}>
                        <a href='javascript:void(0)'onClick={addUniqueA} id='anchorA' target='á'><p className='special'>á</p></a> <p className='special'></p>    
                        <a href='javascript:void(0)'onClick={addUniqueE} id='anchorE' target='é'><p className='special'>é</p></a> <p className='special'></p>
                        <a href='javascript:void(0)'onClick={addUniqueI} id='anchorI' target='í'><p className='special'>í</p></a> <p className='special'></p> 
                        <a href='javascript:void(0)'onClick={addUniqueO} id='anchorO' target='ó'><p className='special'>ó</p></a> <p className='special'></p>
                        <a href='javascript:void(0)'onClick={addUniqueU} id='anchorU' target='ú'><p className='special'>ú</p></a> <p className='special'></p>
                        <a href='javascript:void(0)'onClick={addUniqueUU} id='anchorUU' target='ü'><p className='special'>ü</p></a> <p className='special'></p>

                    </div> 
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        questions: state.questions,
        lesson:state.lesson,
        currentQuestion:state.currentQuestion,
        questionQueue:state.questionQueue,
        translation:state.translation,
        answer:state.answer

    }
}

export default connect(mapStateToProps)(Lesson)