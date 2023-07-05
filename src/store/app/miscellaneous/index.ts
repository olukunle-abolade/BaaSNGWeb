import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/store'
import axios from 'axios'
import config from '@/configs/config'
import { HTTP_STATUS } from '@/constants'


interface MyData {
  data: any[]
  records: any[]
  message: string
  msg: string
  error: string
}

// SIGN UP

interface MyKnownError {
  errorMessage: string
}

const headers = {
  'Content-Type': 'application/json',
  'X-API-Key': process.env.NEXT_PUBLIC_BAAS_API_KEY
}

export const fetchAsyncIdType = createAsyncThunk<
  MyData,
  { url: string },
  {
    rejectValue: MyKnownError
  }
>('idType/fetchAsyncThunk', async (userInfo, { rejectWithValue }) => {
  const { url } = userInfo
  try {
    const response = await axios.get(config.baseUrl + url, {
      headers: headers,
      validateStatus: () => {
        return true
      }
    })

    return response.data
  } catch (err: any) {
    console.log(err)

    return rejectWithValue(err.response.data)
  }
})

export const fetchAsyncBusinessType = createAsyncThunk<
  MyData,
  { url: string },
  {
    rejectValue: MyKnownError
  }
>('businessType /fetchAsyncThunk', async (userInfo, { rejectWithValue }) => {
  const { url } = userInfo
  try {
    const response = await axios.get(config.baseUrl + url, {
      headers: headers,
      validateStatus: () => {
        return true
      }
    })

    return response.data
  } catch (err: any) {
    console.log(err)

    return rejectWithValue(err.response.data)
  }
})

export const fetchAsyncBusinessIndustry= createAsyncThunk<
  MyData,
  { url: string },
  {
    rejectValue: MyKnownError
  }
>('businessIndustry/fetchAsyncThunk', async (userInfo, { rejectWithValue }) => {
  const { url } = userInfo
  try {
    const response = await axios.get(config.baseUrl + url, {
      headers: headers,
      validateStatus: () => {
        return true
      }
    })

    return response.data
  } catch (err: any) {
    console.log(err)

    return rejectWithValue(err.response.data)
  }
})

export const fetchAsyncPurposeOfAccout= createAsyncThunk<
  MyData,
  { url: string },
  {
    rejectValue: MyKnownError
  }
>('purposeOfAccout/fetchAsyncThunk', async (userInfo, { rejectWithValue }) => {
  const { url } = userInfo
  try {
    const response = await axios.get(config.baseUrl + url, {
      headers: headers,
      validateStatus: () => {
        return true
      }
    })

    return response.data
  } catch (err: any) {
    console.log(err)

    return rejectWithValue(err.response.data)
  }
})

export const fetchAsyncCountries= createAsyncThunk<
  MyData,
  { url: string },
  {
    rejectValue: MyKnownError
  }
>('countries/fetchAsyncThunk', async (userInfo, { rejectWithValue }) => {
  const { url } = userInfo
  try {
    const response = await axios.get(config.baseUrl + url, {
      headers: headers,
      validateStatus: () => {
        return true
      }
    })

    return response.data
  } catch (err: any) {
    console.log(err)

    return rejectWithValue(err.response.data)
  }
})

export const fetchAsyncOccupation= createAsyncThunk<
  MyData,
  { url: string },
  {
    rejectValue: MyKnownError
  }
>('occupation/fetchAsyncThunk', async (userInfo, { rejectWithValue }) => {
  const { url } = userInfo
  try {
    const response = await axios.get(config.baseUrl + url, {
      headers: headers,
      validateStatus: () => {
        return true
      }
    })

    return response.data
  } catch (err: any) {
    console.log(err)

    return rejectWithValue(err.response.data)
  }
})

export const fetchAsyncStates= createAsyncThunk<
  MyData,
  { url: string },
  {
    rejectValue: MyKnownError
  }
>('states/fetchAsyncThunk', async (userInfo, { rejectWithValue }) => {
  const { url } = userInfo
  try {
    const response = await axios.get(config.baseUrl + url, {
      headers: headers,
      validateStatus: () => {
        return true
      }
    })

    return response.data
  } catch (err: any) {
    console.log(err)

    return rejectWithValue(err.response.data)
  }
})

export const fetchAsyncGender= createAsyncThunk<
  MyData,
  { url: string },
  {
    rejectValue: MyKnownError
  }
>('states/fetchAsyncThunk', async (userInfo, { rejectWithValue }) => {
  const { url } = userInfo
  try {
    const response = await axios.get(config.baseUrl + url, {
      headers: headers,
      validateStatus: () => {
        return true
      }
    })

    return response.data
  } catch (err: any) {
    console.log(err)

    return rejectWithValue(err.response.data)
  }
})

export const fetchAsyncSourceOfFund= createAsyncThunk<
  MyData,
  { url: string },
  {
    rejectValue: MyKnownError
  }
>('sourceOfFund/fetchAsyncThunk', async (userInfo, { rejectWithValue }) => {
  const { url } = userInfo
  try {
    const response = await axios.get(config.baseUrl + url, {
      headers: headers,
      validateStatus: () => {
        return true
      }
    })

    return response.data
  } catch (err: any) {
    console.log(err)

    return rejectWithValue(err.response.data)
  }
})

export const fetchAsyncNigeriaBank= createAsyncThunk<
  MyData,
  { url: string },
  {
    rejectValue: MyKnownError
  }
>('nigeriaBank/fetchAsyncThunk', async (userInfo, { rejectWithValue }) => {
  const { url } = userInfo
  try {
    const response = await axios.get(config.baseUrl + url, {
      headers: headers,
      validateStatus: () => {
        return true
      }
    })

    return response.data
  } catch (err: any) {
    console.log(err)

    return rejectWithValue(err.response.data)
  }
})

export const fetchAsyncTransferType= createAsyncThunk<
  MyData,
  { url: string },
  {
    rejectValue: MyKnownError
  }
>('transferType/fetchAsyncThunk', async (userInfo, { rejectWithValue }) => {
  const { url } = userInfo
  try {
    const response = await axios.get(config.baseUrl + url, {
      headers: headers,
      validateStatus: () => {
        return true
      }
    })

    return response.data
  } catch (err: any) {
    console.log(err)

    return rejectWithValue(err.response.data)
  }
})





export interface IMiscellaneous {
  idtype: any[] | null
  businesstype: any[] | null
  businessindustry: any[] | null
  purposeofaccount: any[] | null
  countries: any[] | null
  occupation: any[] | null
  gender: any[] | null
  states: any[] | null
  sources: any[] | null
  bank:any[] | null
  loading: string,
  transferType: any[] | null
  error: null | string
}

const initialState = {
  idtype: null,
  bank: null,
  businesstype: null,
  businessindustry: null,
  purposeofaccount: null,
  countries: null,
  occupation: null,
  gender: null,
  states: null,
  sources: null,
  loading: 'IDLE',
  error: ''
} as IMiscellaneous

const MiscellaneousSlice = createSlice({
  name: 'support',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAsyncIdType.pending, state => {
      // The type signature on action.payload matches what we passed into the generic for `normalize`, allowing us to access specific properties on `payload.articles` if desired
      state.loading = HTTP_STATUS.PENDING
    })
    builder.addCase(fetchAsyncIdType.fulfilled, (state, { payload }) => {
      state.loading = HTTP_STATUS.FULFILLED
      state.idtype = payload.records
    })
    builder.addCase(fetchAsyncIdType.rejected, (state, action: PayloadAction<any>) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
        state.error = action.payload.errorMessage
      } else {
        // state.error = action.error
      }
    }),
    builder.addCase(fetchAsyncBusinessType.pending, state => {
      // The type signature on action.payload matches what we passed into the generic for `normalize`, allowing us to access specific properties on `payload.articles` if desired
      state.loading = HTTP_STATUS.PENDING
    })
    builder.addCase(fetchAsyncBusinessType.fulfilled, (state, { payload }) => {
      state.loading = HTTP_STATUS.FULFILLED
      state.businesstype = payload.records
    })
    builder.addCase(fetchAsyncBusinessType.rejected, (state, action: PayloadAction<any>) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
        state.error = action.payload.errorMessage
      } else {
        // state.error = action.error
      }
    }),
    builder.addCase(fetchAsyncBusinessIndustry.pending, state => {
      // The type signature on action.payload matches what we passed into the generic for `normalize`, allowing us to access specific properties on `payload.articles` if desired
      state.loading = HTTP_STATUS.PENDING
    })
    builder.addCase(fetchAsyncBusinessIndustry.fulfilled, (state, {payload}) => {
      state.loading = HTTP_STATUS.FULFILLED
      state.businessindustry = payload.records
    })
    builder.addCase(fetchAsyncBusinessIndustry.rejected, (state, action: PayloadAction<any>) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
        state.error = action.payload.errorMessage
      } else {
        // state.error = action.error
      }
    }),
    builder.addCase(fetchAsyncPurposeOfAccout.pending, state => {
      // The type signature on action.payload matches what we passed into the generic for `normalize`, allowing us to access specific properties on `payload.articles` if desired
      state.loading = HTTP_STATUS.PENDING
    })
    builder.addCase(fetchAsyncPurposeOfAccout.fulfilled, (state, {payload}) => {
      state.loading = HTTP_STATUS.FULFILLED
      state.purposeofaccount = payload.records
    })
    builder.addCase(fetchAsyncPurposeOfAccout.rejected, (state, action: PayloadAction<any>) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
        state.error = action.payload.errorMessage
      } else {
        // state.error = action.error
      }
    }),
    builder.addCase(fetchAsyncCountries.pending, state => {
      // The type signature on action.payload matches what we passed into the generic for `normalize`, allowing us to access specific properties on `payload.articles` if desired
      state.loading = HTTP_STATUS.PENDING
    })
    builder.addCase(fetchAsyncCountries.fulfilled, (state, {payload}) => {
      state.loading = HTTP_STATUS.FULFILLED
      state.countries = payload.records
    })
    builder.addCase(fetchAsyncCountries.rejected, (state, action: PayloadAction<any>) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
        state.error = action.payload.errorMessage
      } else {
        // state.error = action.error
      }
    }),
    builder.addCase(fetchAsyncOccupation.pending, state => {
      // The type signature on action.payload matches what we passed into the generic for `normalize`, allowing us to access specific properties on `payload.articles` if desired
      state.loading = HTTP_STATUS.PENDING
    })
    builder.addCase(fetchAsyncOccupation.fulfilled, (state, {payload}) => {
      state.loading = HTTP_STATUS.FULFILLED
      state.occupation = payload.records
    })
    builder.addCase(fetchAsyncOccupation.rejected, (state, action: PayloadAction<any>) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
        state.error = action.payload.errorMessage
      } else {
        // state.error = action.error
      }
    })
    builder.addCase(fetchAsyncStates.pending, state => {
      // The type signature on action.payload matches what we passed into the generic for `normalize`, allowing us to access specific properties on `payload.articles` if desired
      state.loading = HTTP_STATUS.PENDING
    })
    builder.addCase(fetchAsyncStates.fulfilled, (state, {payload}) => {
      state.loading = HTTP_STATUS.FULFILLED
      state.states = payload.records
    })
    builder.addCase(fetchAsyncStates.rejected, (state, action: PayloadAction<any>) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
        state.error = action.payload.errorMessage
      } else {
        // state.error = action.error
      }
    }),
    builder.addCase(fetchAsyncSourceOfFund.pending, state => {
      // The type signature on action.payload matches what we passed into the generic for `normalize`, allowing us to access specific properties on `payload.articles` if desired
      state.loading = HTTP_STATUS.PENDING
    })
    builder.addCase(fetchAsyncSourceOfFund.fulfilled, (state, {payload}) => {
      state.loading = HTTP_STATUS.FULFILLED
      state.sources = payload.records
    })
    builder.addCase(fetchAsyncSourceOfFund.rejected, (state, action: PayloadAction<any>) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
        state.error = action.payload.errorMessage
      } else {
        // state.error = action.error
      }
    })

    builder.addCase(fetchAsyncNigeriaBank.pending, state => {
      // The type signature on action.payload matches what we passed into the generic for `normalize`, allowing us to access specific properties on `payload.articles` if desired
      state.loading = HTTP_STATUS.PENDING
    })
    builder.addCase(fetchAsyncNigeriaBank.fulfilled, (state, {payload}) => {
      console.log(payload);
      state.loading = HTTP_STATUS.FULFILLED
      state.bank = payload.records
    })
    builder.addCase(fetchAsyncNigeriaBank.rejected, (state, action: PayloadAction<any>) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
        state.error = action.payload.errorMessage
      } else {
        // state.error = action.error
      }
    })
    builder.addCase(fetchAsyncTransferType.pending, state => {
      // The type signature on action.payload matches what we passed into the generic for `normalize`, allowing us to access specific properties on `payload.articles` if desired
      state.loading = HTTP_STATUS.PENDING
    })
    builder.addCase(fetchAsyncTransferType.fulfilled, (state, {payload}) => {
      console.log(payload);
      state.loading = HTTP_STATUS.FULFILLED
      state.transferType = payload.records
    })
    builder.addCase(fetchAsyncTransferType.rejected, (state, action: PayloadAction<any>) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
        state.error = action.payload.errorMessage
      } else {
        // state.error = action.error
      }
    })
  }
})

export const getMiscellaneousLoading = (state: RootState) => state.miscellaneous?.loading
export const getMiscellaneousIdType = (state: RootState) => state.miscellaneous?.idtype
export const getMiscellaneousBusinessType = (state: RootState) => state.miscellaneous?.businesstype
export const getMiscellaneousIndustry = (state: RootState) => state.miscellaneous?.businessindustry
export const getMiscellaneousNigerianBanks = (state: RootState) => state.miscellaneous?.bank
export const getMiscellaneousPurposeOfAccout = (state: RootState) => state.miscellaneous?.purposeofaccount
export const getMiscellaneousCountries = (state: RootState) => state.miscellaneous?.countries
export const getMiscellaneousOccupation = (state: RootState) => state.miscellaneous?.occupation
export const getMiscellaneousStates = (state: RootState) => state.miscellaneous?.states
export const getMiscellaneousGender = (state: RootState) => state.miscellaneous?.gender
export const getMiscellaneousSourceOfFund = (state: RootState) => state.miscellaneous?.sources
export const getMiscellaneousTransferType = (state: RootState) => state.miscellaneous?.transferType
export default MiscellaneousSlice.reducer
