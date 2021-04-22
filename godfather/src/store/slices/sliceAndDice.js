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
    async (Authtoken) => {
        return await httpGet('/api/character', { headers: {Authorization: 'Bearer ' + Authtoken} })
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
