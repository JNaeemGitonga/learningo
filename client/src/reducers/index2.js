import * as a from '../actions/index2'

export const state2 = {
    valid:false,
    value:null,
    validate:null,
    confirmPassword:null,
    password:null,
    username:null,
    errorVisible:false,
    errorMessage:'Passwords do not match.',
    userId:null,
    questions:null,
    style:'none'

}

const reducerTwo = (state = state2, action) => {
    switch(action.type) {
        case a.SET_PASSWORD:
        return Object.assign({}, state, {
            password:action.password
        })
    case a.SET_CONFIRM_PASSWORD:
        return Object.assign({}, state, {
            confirmPassword:action.confirmPass
        })
    case a.VALIDATE:
        return Object.assign({}, state, {
            validate:(action.val === state.password),
            confirmPassword:action.val
        })
    case a.VALUE:
        return Object.assign({}, state, {
            value:action.num
        })
    case a.VALID:
        return Object.assign({}, state,{
            valid:action.q,
            errorVisible:action.b
        })
    case a.SET_USERNAME:
        return Object.assign({}, state,{
            username:action.username
        })
    case a.SET_USERID:
        return Object.assign({}, state,{
            userId:action.userId
        })
    case a.USER_LOGOUT:
        console.log('from reducer',state)
        return state = null
    case a.DISPLAY_ERROR: 
        if(state.style === 'none'){
            return Object.assign({}, state, {
                style:'block'
            })
        }
        else {
            return Object.assign({}, state, {
                style:'none'
            })
        }
    default:
        return state
    }
}

export default reducerTwo