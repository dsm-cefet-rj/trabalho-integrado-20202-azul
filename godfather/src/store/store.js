import { createStore } from 'redux'
import testPlayerImage from '../card-components/character/mafia-luffy.jpg'

const INITIAL_STATE = {
    picture: testPlayerImage,
    name: 'Don Luffino',
    status: [21, 42, 10, 23],
    // reputation: 20,
    // equipament: [{}, {}, {}, {}],
    // inventory: [{}, {}, {}, {}, {}, {}, {}, {}],
    activeMission: {}
}

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_CHARACTER':
            // Adding one more element to an array
            // return { ...state, data: [...state.data, action.title]}
            return { 
                ...state,
                name: action.name,
                reputation: action.reputation,
                status: action.status,
                equipament: action.equipament,
                inventory: action.inventory,
                activeMission: action.activeMission
            }
        case 'ADD_STATUS':
            return { ...state, status: state.status[action.index] + 1}
        default:
            return state
    }
}

const store = createStore(reducer)

export default store