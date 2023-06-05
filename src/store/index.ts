// ** Toolkit imports
import { combineReducers, configureStore } from '@reduxjs/toolkit'

// ** Reducers
import profileReducer from '@/store/app/profile'
import miscellaneousReducer from '@/store/app/miscellaneous'
import dashboardReducer from '@/store/app/dashboard'
import passwordReducer from '@/store/app/password-change'

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  profile: profileReducer,
  miscellaneous: miscellaneousReducer,
  password: passwordReducer
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
