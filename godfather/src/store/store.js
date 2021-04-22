import { configureStore } from '@reduxjs/toolkit'
import characterReducer from './slices/characterSlice'
import userReducer from './slices/userSlice'
import missionReducer from './slices/missionSlice'

export default configureStore({
    reducer: {
        character: characterReducer,
        user: userReducer,
        mission: missionReducer
    }
})
