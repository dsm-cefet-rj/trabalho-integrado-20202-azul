import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: '',
    token:''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => setUserReducer(state, action.payload)
    }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer





function setUserReducer(stateUser, user) {
    stateUser = user
    return { ...stateUser }
}