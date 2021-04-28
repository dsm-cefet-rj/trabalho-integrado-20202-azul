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
        const res = await httpGet('/api/character', { headers: {Authorization: 'Bearer ' + jwt} })
        return res.character
    }
)

export const incrementStatus = createAsyncThunk(
    'character/incrementStatus',
    async ({ userID, statusToIncrement}, { getState }) => {
        const user = getState().user.entities[userID]
        const jwt = user.token

        // Precisaria passar o id do character proveniente do user para a operação
        // Vou passar o status atualizado por enquanto
        

        const res = await httpPost(
            '/api/character/increment-status', 
            { statusToIncrement: statusToIncrement },
            { headers: {Authorization: 'Bearer ' + jwt} }
        )

        return {status: res.status, _id: 0}
    }
)

const characterSlice = createSlice({
    name: 'character',
    initialState: characterAdapter.getInitialState(),
    reducers: {},
    extraReducers: {
        [fetchCharacter.fulfilled]: (state, action) => {
            characterAdapter.addOne(state, action.payload)
        },
        [incrementStatus.fulfilled]: (state, action) => {
            characterAdapter.upsertOne(state, action.payload)
        }
    }
})

export default characterSlice.reducer
export const characterSelectors = characterAdapter.getSelectors((state) => state.character)
