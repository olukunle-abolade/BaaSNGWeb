import { RootState } from '@/store'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import config from '@/configs/config'
import { HTTP_STATUS } from '@/constants'


export interface MyData {
  message: string
  data: any[]
  records: any[]
  code: number
}


interface MyKnownError {
  errorMessage: string
}

const headers = {
  'Content-Type': 'application/json',
  'X-API-Key': process.env.NEXT_PUBLIC_BAAS_API_KEY
}

export const fetchAsyncInterBankName = createAsyncThunk<
  MyData,
  { url: string } ,
  {
    rejectValue: MyKnownError
  }
>('fetchInterBankName/fetchAsyncThunk', async (formData, { rejectWithValue }) => {
  const { url } = formData
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
    if (!err.response) {
      throw err
    }

    return rejectWithValue(err.response.data)
  }
})

export const postAsyncInterBankName = createAsyncThunk<
  MyData,
  { url: string },
  {
    rejectValue: MyKnownError
  }
>('postInterBankName/postAsyncThunk', async (formData, { rejectWithValue }) => {
  const { url, ...data } = formData
  try {
    const response = await axios.post(config.baseUrl + url, data, {
      headers: headers,
      withCredentials: true, // Enable sending cookies
      validateStatus: () => {
        return true
      }
    })

    return response.data
  } catch (err: any) {
    console.log(err)
    if (!err.response) {
      throw err
    }

    return rejectWithValue(err.response.data)
  }
})


export interface IIntrabank {
  data: any[] | null
  loading: string
  error: null | string
}

const initialState = {
  data: null,
  loading: 'IDLE',
  error: ''
} as IIntrabank

const Intrabank = createSlice({
  name: 'intrabank',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAsyncInterBankName.pending, state => {
      // The type signature on action.payload matches what we passed into the generic for `normalize`, allowing us to access specific properties on `payload.articles` if desired
      state.loading = HTTP_STATUS.PENDING
    })
    builder.addCase(fetchAsyncInterBankName.fulfilled, (state, { payload }) => {
      state.loading = HTTP_STATUS.FULFILLED
      state.data = payload.records
    })
    builder.addCase(fetchAsyncInterBankName.rejected, (state, action: PayloadAction<any>) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
        state.error = action.payload.errorMessage
      } else {
        // state.error = action.error
      }
    }),
    builder.addCase(postAsyncInterBankName.pending, state => {
      // The type signature on action.payload matches what we passed into the generic for `normalize`, allowing us to access specific properties on `payload.articles` if desired
      state.loading = HTTP_STATUS.PENDING
    })
    builder.addCase(postAsyncInterBankName.fulfilled, (state, { payload }) => {
      state.loading = HTTP_STATUS.FULFILLED
      // state.data = payload.data
    })
    builder.addCase(postAsyncInterBankName.rejected, (state, action: PayloadAction<any>) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
        state.error = action.payload.errorMessage
      } else {
        // state.error = action.error
      }
    })
  }
})

// export const getHelpDeskLoading = (state: RootState) => state?.loading

export const getIntraNameData = (state: RootState) => state.intrabank.data ;
export default Intrabank.reducer
