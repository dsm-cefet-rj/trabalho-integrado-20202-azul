import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import donLuffinoImg from '../../card-components/character/mafia-luffy.jpg'

const initialState = {
    picture: donLuffinoImg,
    name: 'Don Luffino',
    status: {
        atk: 21,
        res: 42,
        lck: 10,
        rsl: 23
    },
    activeMission: {}
}

export const fetchProjetos = createAsyncThunk('projetos/fetchProjetos', 
  async() =>  {
    return await (await fetch('http://localhost:5000/characters')).json();
});

function fullfillProjetosReducer(projetosState, projetosFetched) {
    return projetosFetched;
}

const characterSlice = createSlice({
    name: 'Character',
    initialState,
    reducers: {
        setCharacter(state, action) {
            const { picture, name, status, activeMission } = action.payload
            state.picture = picture
            state.name = name
            state.status = status
            state.activeMission = activeMission
        },
        extraReducers: {
            [fetchProjetos.fulfilled]:(state, action) => fullfillProjetosReducer(state = action.payload)
        },
        incrementStatus(state, action) {
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
