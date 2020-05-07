import actionTypes from '../actionTypes'
import axios from 'axios'

export const signInUser = ({ email, password }) => {
    return async dispatch => {
        const userData = {
            email,
            password
        }
        const res = await axios.post('http://localhost:5000/api/users/login', userData)

        // localStorage.setItem("token", res.data.token, {expires: 1})
        dispatch(setUser(await res.data))
    }
}

export const setUser = (user) => {
    return {
        type: actionTypes().users.signIn,
        payload: user
    }
}



export const signUpUser = ({ firstName, lastName, email, password }) => {
    return async dispatch => {
        const userData = {
            firstName,
            lastName,
            email,
            password
        }
        const res = await axios.post('http://localhost:5000/api/users/register', userData)
        dispatch(user(await res.data.user))
    }
}

export const user = (user) => {
    return {
        type: actionTypes().users.register,
        payload: user
    }
}