import Queue from '../queue';
const initialState = {
    currentUser: null,
    currentQuestion:undefined,
    lesson:null,
    questions:[],
    nextQuestion:null,
    score:null,
    questionQueue: null,
    answer:null,
    translation:null,
    clicked:false

}

export const learnReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SCORE_REQUEST':
            return Object.assign({}, state, {
                error:null,
                loading:true
            })
        case 'GET_SCORE_SUCCESS':
            return Object.assign({}, state, {
                score:action.score,
                loading:false
            })
        case 'GET_CURRENT_USER_SUCCESS':
            return Object.assign({}, state, {
                currentUser: action.user
            })
      
        case 'CURRENT_USER':
            return Object.assign({}, state, {
                currentUser:action.currentUser
            })
        case 'PICK_LESSON':
        let queue;
                if (action.lesson === "''") {
                    return
                }  
             for (let i = 0; i < state.questions.length; i++) {
                if (state.questions[action.lesson] === state.questions[i] ) {
                    queue = new Queue();
                    state.questions[i].questions.forEach(question => {
                    queue.enqueue(question); 
                    })
                }
            }
            console.log(action.lesson)
            return Object.assign({}, state,{
                lesson:action.lesson,
                questionQueue: queue,
            })
        case 'REQUEST_LESSON':
            return Object.assign ({}, state, {
            })
        case 'REQUEST_LESSON_SUCCESS':
            return Object.assign({}, state, {
                questions: action.questions,
            })
        case 'REQUEST_LESSON_ERROR':
            return Object.assign({}, state, {
                error:action.error
            })
        case 'START_LESSON':
            let fromQueue = state.questionQueue.dequeue();

            return Object.assign({}, state, {
                currentQuestion:fromQueue.question,
                translation:fromQueue.translation,
                answer:fromQueue.answer
            })
        case 'NEXT_QUESTION':
            let nextQuestion;
            if (state.questionQueue !== undefined) {
                 nextQuestion = state.questionQueue.dequeue();
                if (nextQuestion === undefined){
                    return Object.assign({}, state, {
                        currentQuestion:`Hooray! You've learned a lot! 
                        Click the logo to start again.`
                    })
                }
                return Object.assign({}, state, {
                    currentQuestion:nextQuestion.question,
                    translation:nextQuestion.translation,
                    answer:nextQuestion.answer
                })   
            }
        case 'ENQUEUE_IT':
            let newQueue;
            let data = {
                question:state.currentQuestion,
                translation:state.translation,
                answer:state.answer
            };
            action.q.enqueue(data)
            newQueue = action.q
            return Object.assign({}, state, {
               questionQueue:newQueue 
            })
        default:
            return state
    }
}
export default learnReducer;
