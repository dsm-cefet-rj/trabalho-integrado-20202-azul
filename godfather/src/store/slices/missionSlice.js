import { 
    createSlice,
    createAsyncThunk, 
    createEntityAdapter
} from '@reduxjs/toolkit'
import { httpGet } from '../../utils'

const missionAdapter = createEntityAdapter({
    selectId: (mission) => mission._id
})

export const fetchMissions = createAsyncThunk(
    'mission/fetchMissions',
    async (Authtoken) => {
        return await httpGet('/api/missions', { headers: {Authorization: 'Bearer ' + Authtoken} })
    }
)

const missionSlice = createSlice({
    name: 'mission',
    initialState: missionAdapter.getInitialState(),
    reducers: {},
    extraReducers: {
        [fetchMissions.fulfilled]: (state, action) => {
            missionAdapter.setAll(state, action.payload.missionList)
        }
    }
})

export default missionSlice.reducer
export const missionSelectors = missionAdapter.getSelectors((state) => state.mission)
