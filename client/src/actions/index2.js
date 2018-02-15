import request from "superagent";
import {push} from 'react-router-redux';

export const SET_JWT = 'SET_JWT';
export const setJWT = jwt => ({
    type:SET_JWT,
    jwt
})

export const SET_PASSWORD = 'SET_PASSWORD';
export const setPassword = password => ({
    type:SET_PASSWORD,
    password
})

export const DISPLAY_ERROR = 'DISPLAY_ERROR';
export const displayError = () => ({
    type:DISPLAY_ERROR
})

export const SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD';
export const setConfirmPass = confirmPass => ({
    type:SET_CONFIRM_PASSWORD,
    confirmPass
})

export const VALIDATE = 'VALIDATE';
export const validate = val => ({
    type:VALIDATE,
    val
})

export const VALUE = 'VALUE'
export const value = num =>({
    type:VALUE, 
    num
})

export const VALID = 'VALID';
export const valid = (q,b) =>({
    type:VALID,
    q,
    b
})

export const SET_USERNAME = 'SET_USERNAME';
export const setUsername = username => ({
    type:SET_USERNAME,
    username
})

export const ENTER_NAME = 'ENTER_NAME';
export const enterName = name => ({
    type:ENTER_NAME,
    name 
})

export const SET_USERID = 'SET_USERID';
export const setUserId = userId => ({
    type:SET_USERID,
        userId
})

export const USER_LOGOUT = 'USER_LOGOUT';
export const userLogout = () => ({
    type:USER_LOGOUT
})

export const login = (username,password) => dispatch => {

    let obj = {
        username:username,
        password:password
    }

    let userId;
    request 
        .post('/api/learningo/auth/login')
        .set( 'Accept','application/json')
        .set('Content-type', 'application/json')
        .send(JSON.stringify(obj)) 
        .then((res) => {
            dispatch(setJWT(res.body))
            userId = res.body.user._id;
            console.log(res.body)
            dispatch(setUserId(res.body.user._id))
        })
        .then(() => dispatch(push(`/home/${userId}`)))  
        .catch(err => console.log('error from login', err))
}

export const createUser = (username, password, fName, lName,phone) => dispatch => {
    let newUser = {

            username:username,
            firstName:fName,
            lastName:lName,
            password:password,
    }
    let userId;
    return fetch('/api/learningo/users/signup', {
        method:'POST',
        headers: {
            Accept: 'application/json', 
            'Content-type': 'application/json',
           },
        body: JSON.stringify(newUser)
        })
        .then(res => {
            if (res.ok) {
                return request 
                .post('/api/learningo/auth/login')
                .set( 'Accept','application/json')
                .set('Content-type', 'application/json')
                .send(JSON.stringify({username:username,password:password})) 
                .then(res => {
                    dispatch(setJWT(res.body))
                    userId = res.body.user._id;
                    dispatch(setUserId(res.body.user._id))
                })
               .then(() => dispatch(push(`/home/${userId}`)))
               .catch(err => console.log('error from login', err))
            }
            else{  console.log(res.message)}
            
        })
        .catch(err => {
            alert(`${err} is your error!`)
        })
}
