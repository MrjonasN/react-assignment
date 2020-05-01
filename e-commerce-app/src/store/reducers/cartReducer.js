import actionTypes from '../actionTypes'

const INITIAL_STATE = {
    shoppingCart: []
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case actionTypes().cart.add:
            try {

            }
            catch{ }
            return state
    }
    return state
}