import { createSlice } from '@reduxjs/toolkit'
import donLuffinoImg from '../../card-components/character/mafia-luffy.jpg'

const initialState = {
    _id: 0,
    picture: donLuffinoImg,
    name: 'Default name',
    reputation: 0,
    wins: 0,
    losses: 0,

    status: {
        pointsAvailable: 0,
        atk: 1,
        res: 1,
        lck: 1,
        rsl: 1
    },

    leveling: {
        xp: 0,
        level: 1,
        upXp: 10
    },

    activeMission: {
        missionId: 0,
        missionStartTime: ''
    },

    rankId: 0
}

export const fetchProjetos = createAsyncThunk('projetos/fetchProjetos', 
  async() =>  {
    return await (await fetch('http://localhost:3000/characters')).json();
});

function fullfillProjetosReducer(projetosState, projetosFetched) {
    return projetosFetched;
}

const characterSlice = createSlice({
    name: 'Character',
    initialState,
    reducers: {
        setCharacter(state, action) {
            // const { picture, name, status, activeMission } = action.payload
            let aux = { ...action.payload }

            state._id = aux._id
            state.picture = aux.picture
            state.name = aux.name
            state.reputation = aux.reputation
            state.wins = aux.wins
            state.losses = aux.losses

            state.status = aux.status
            state.leveling = aux.leveling
            state.activeMission = aux.activeMission
            state.rankId = aux.rankId
        },
        extraReducers: {
            [fetchProjetos.fulfilled]:(state, action) => fullfillProjetosReducer(state = action.payload)
        },
        incrementStatus(state, action) {
            if (state.status.pointsAvailable < 1) {
                return
            } else {
                state.status.pointsAvailable--
            }

            switch (action.payload.sts) {
                case 'atk':
                    state.status.atk++
                    return
                case 'res':
                    state.status.res++
                    return
                case 'lck':
                    state.status.lck++
                    return
                case 'rsl':
                    state.status.rsl++
                    return
                default:
                    return
            }
        }
    }
})

// To dispatch info for the store: import the function below 
// and use it inside  the dispatch hook arg passing by its arg an object 
// that contains all required info.
export const { setCharacter, incrementStatus } = characterSlice.actions

export default characterSlice.reducer
