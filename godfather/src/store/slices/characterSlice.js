import { 
    createSlice,
    createAsyncThunk, 
    createEntityAdapter
} from '@reduxjs/toolkit'
import { httpGet, httpPost } from '../../utils'

const characterAdapter = createEntityAdapter({
    selectId: (character) => character._id
})

export const fetchCharacter = createAsyncThunk(
    'character/fetchCharacter',
    async (userID, { getState }) => {
        const jwt = getState().user.entities[userID].token
        const aux = await httpGet('/api/character', { headers: {Authorization: 'Bearer ' + jwt} })
        return aux.character
    }
)

export const incrementStatus = createAsyncThunk(
    'character/incrementStatus',
    async (Authtoken, statusToIncrement) => {
        return await httpPost('/api/character', { headers: {Authorization: 'Bearer ' + Authtoken}, body: {statusToIncrement} })
    }
)

const characterSlice = createSlice({
    name: 'character',
    initialState: characterAdapter.getInitialState(),
    reducers: {},
    extraReducers: {
        [fetchCharacter.fulfilled]: (state, action) => {
            characterAdapter.addOne(state, action.payload)
        }
    }
})

export default characterSlice.reducer
export const characterSelectors = characterAdapter.getSelectors((state) => state.character)






























// import { createSlice } from '@reduxjs/toolkit'
// import donLuffinoImg from '../../card-components/character/mafia-luffy.jpg'

// const initialState = {
//     _id: 0,
//     picture: donLuffinoImg,
//     name: 'Default name',
//     reputation: 0,
//     wins: 0,
//     losses: 0,

//     status: {
//         pointsAvailable: 0,
//         atk: 1,
//         res: 1,
//         lck: 1,
//         rsl: 1
//     },

//     leveling: {
//         xp: 0,
//         level: 1,
//         upXp: 10
//     },

//     activeMission: {
//         missionId: 0,
//         missionStartTime: ''
//     },

//     rankId: 0
// }

// const characterSlice = createSlice({
//     name: 'Character',
//     initialState,
//     reducers: {
//         setCharacter(state, action) {
//             // const { picture, name, status, activeMission } = action.payload
//             let aux = { ...action.payload }

//             state._id = aux._id
//             state.picture = aux.picture
//             state.name = aux.name
//             state.reputation = aux.reputation
//             state.wins = aux.wins
//             state.losses = aux.losses

//             state.status = aux.status
//             state.leveling = aux.leveling
//             state.activeMission = aux.activeMission
//             state.rankId = aux.rankId
//         },
//         incrementStatus(state, action) {
//             if (state.status.pointsAvailable < 1) {
//                 return
//             } else {
//                 state.status.pointsAvailable--
//             }

//             switch (action.payload.sts) {
//                 case 'atk':
//                     state.status.atk++
//                     return
//                 case 'res':
//                     state.status.res++
//                     return
//                 case 'lck':
//                     state.status.lck++
//                     return
//                 case 'rsl':
//                     state.status.rsl++
//                     return
//                 default:
//                     return
//             }
//         }
//     }
// })

// // To dispatch info for the store: import the function below 
// // and use it inside  the dispatch hook arg passing by its arg an object 
// // that contains all required info.
// export const { setCharacter, incrementStatus } = characterSlice.actions

// export default characterSlice.reducer