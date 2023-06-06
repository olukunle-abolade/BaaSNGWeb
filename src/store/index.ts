// ** Toolkit imports
import { combineReducers, configureStore } from '@reduxjs/toolkit'

// ** Reducers
import profileReducer from '@/store/app/profile'
import miscellaneousReducer from '@/store/app/miscellaneous'
import dashboardReducer from '@/store/app/dashboard'
import passwordReducer from '@/store/app/password-change'
import ipReducer from '@/store/app/ipwhitelist'
import testmodeReducer from '@/store/app/test-mode'

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  profile: profileReducer,
  miscellaneous: miscellaneousReducer,
  password: passwordReducer,
  ipwhitelist: ipReducer,
  testmode: testmodeReducer
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
