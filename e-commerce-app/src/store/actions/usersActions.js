import actionTypes from '../actionTypes'
import axios from 'axios'


export const signInUser = () => {
    return async dispatch => {
        const res = await axios.post('http://localhost:5000/api/users/login')
        dispatch(setUser(res.data))
    }
}

export const setUser = (user) => {
    return {
        type: actionTypes().users.signIn,
        payload: user
    }
}




export const signUpUser = ({ firstName, lastName, email, password }) => {
    return dispatch => {
        const body = JSON.stringify({ firstName, lastName, email, password })
        console.log(body);
        axios.post('http://localhost:5000/api/users/register', body)
            .then(res => dispatch(user(res.data)))
    }
}

export const user = (user) => {
    return {
        type: actionTypes().users.register,
        payload: user
    }
}


