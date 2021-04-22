import { 
    createSlice,
    createAsyncThunk, 
    createEntityAdapter, 
    nanoid 
} from '@reduxjs/toolkit'
import { httpPost } from '../../utils'

const userAdapter = createEntityAdapter({
    selectId: (user) => user.userId
})

export const fetchUserLogin = createAsyncThunk(
    'user/fetchUserLogin', 
    async (formData) => {
        // const reqOpts = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // }

        // const aux = await(await fetch('/api/users/login', reqOpts)).json()

        // console.log(aux)
        // return {...aux, userId: nanoid()}

        const aux = await httpPost('/api/users/login', formData)
        return {...aux, userId:nanoid()}
    }
)
export const signUpUser = createAsyncThunk(
    'user/signUpUser', 
    async (formData) => {
        await httpPost('/api/users/signup', formData)
        return
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: userAdapter.getInitialState(),
    reducers: {
        setUser: (state, action) => setUserReducer(state, action.payload)
    },
    extraReducers: {
        [fetchUserLogin.fulfilled]: (state, action) => { userAdapter.upsertOne(state, action.payload)
        }
    }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer

// Recovering data
export const userSelectors = userAdapter.getSelectors((state) => state.user)
// export const userIds = globalizedSelectors.selectIds(store.getState())



function setUserReducer(stateUser, user) {
    stateUser = user
    return { ...stateUser }
}
