import { createStore } from 'redux'

const INITIAL_STATE = {
    data: [
        'React Native',
        'ReactJS'
    ]
}

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_COURSE':
            return { ...state, date: [...state.data, action.title]}
        default:
            return state
    }
}

const store = createStore(reducer)

export default store