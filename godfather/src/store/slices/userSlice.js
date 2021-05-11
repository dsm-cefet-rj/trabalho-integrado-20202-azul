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
        const aux = await httpPost('/api/users/login', formData)
        return {...aux, userId:nanoid()}
    }
)
export const signUpUser = createAsyncThunk(
    'user/signUpUser', 
    async (formData) => {
        await httpPost('/api/users/signup', formData)
    }
)

export const logOutUser = createAsyncThunk(
    'user/logOutUser',
    async (user) => {
        const res = await httpPost(
            '/api/users/logout', 
            { token: user.token }, 
            { headers: {Authorization: 'Bearer ' + user.token} }
        )
        alert(res)
        return user.userId
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: userAdapter.getInitialState({
        loading: false,
        logged: false
    }),
    reducers: {
        setUser: (state, action) => setUserReducer(state, action.payload)
    },
    extraReducers: {
        [fetchUserLogin.fulfilled]: (state, action) => {
            state.loading = false
            state.logged = true
            userAdapter.upsertOne(state, action.payload)
            alert(`Welcome ${action.payload.username}`)
        },
        [fetchUserLogin.pending]: (state) => {
            state.loading = true
        },
        [fetchUserLogin.rejected]: (state) => {
            state.loading = false
        },
        [logOutUser.fulfilled]: (state, action) => {
            userAdapter.removeOne(state, action.payload)
            state.loading = false
            state.logged = false
        },
        [logOutUser.pending]: (state) => {
            state.loading = true
        },
        [logOutUser.rejected]: (state) => {
            state.loading = false
        }
    }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer

// Select functions
export const userSelectors = userAdapter.getSelectors((state) => state.user)


function setUserReducer(stateUser, user) {
    stateUser = user
    return { ...stateUser }
}
