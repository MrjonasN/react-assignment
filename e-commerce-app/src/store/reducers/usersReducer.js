import actionTypes from '../actionTypes'

const INITIAL_STATE = {
    currentUser: null,
    users: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes().users.register:
            state.users = action.payload
            return state

        default:
            return state
    }
}