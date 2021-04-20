import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUserLogin = createAsyncThunk('stateUser/fetchUserLogin', 
    async (formData) => {
        const reqOpts = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }

        const aux = await(await fetch('/api/users/login', reqOpts)).json()
        console.log(aux)
        return aux
    }
)

const initialState = {
    username: '',
    token:''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => setUserReducer(state, action.payload)
    },
    extraReducers: {
        [fetchUserLogin.fulfilled]: (state, action) => {
            return state = action.payload
        }
    }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer





function setUserReducer(stateUser, user) {
    stateUser = user
    return { ...stateUser }
}
