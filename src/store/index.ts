// ** Toolkit imports
import { combineReducers, configureStore } from '@reduxjs/toolkit'

// ** Reducers
import userReducer from '@/store/app/user'


const rootReducer = combineReducers({
  users: userReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
