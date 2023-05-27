// ** Toolkit imports
import { combineReducers, configureStore } from '@reduxjs/toolkit'

// ** Reducers
import profileReducer from '@/store/app/profile'


const rootReducer = combineReducers({
  profile: profileReducer,
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
