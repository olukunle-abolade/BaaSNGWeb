// ** Toolkit imports
import { combineReducers, configureStore } from '@reduxjs/toolkit'

// ** Reducers
import profileReducer from '@/store/app/profile'
import miscellaneousReducer from '@/store/app/miscellaneous'
import dashboardReducer from '@/store/app/dashboard'
import passwordReducer from '@/store/app/password-change'
import ipReducer from '@/store/app/ipwhitelist'
import intrabankReducer from '@/store/app/intrabank'
import testmodeReducer from '@/store/app/test-mode'
import transactionReducer from '@/store/app/transaction'
import beneficiariesReducer from '@/store/app/beneficiaries'
import otpReducer from '@/store/app/otp'

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  profile: profileReducer,
  miscellaneous: miscellaneousReducer,
  password: passwordReducer,
  ipwhitelist: ipReducer,
  intrabank: intrabankReducer,
  transaction: transactionReducer,
  beneficiaries: beneficiariesReducer,
  otp: otpReducer,
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
