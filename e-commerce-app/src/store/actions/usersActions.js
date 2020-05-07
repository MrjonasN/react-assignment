import actionTypes from '../actionTypes'
import axios from 'axios'


export const signInUser = () => {

}

export const setUser = (user) => {

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