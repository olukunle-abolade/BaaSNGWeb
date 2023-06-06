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

// SIGN UP
// interface ProfileAttributes {
//   token?: string
// }

interface MyKnownError {
  errorMessage: string
}

const headers = {
  'Content-Type': 'application/json',
  'X-API-Key': process.env.NEXT_PUBLIC_BAAS_API_KEY
}

export const fetchAsyncTestId = createAsyncThunk<
  MyData,
  { url: string },
  {
    rejectValue: MyKnownError
  }
>('fetchfetchAsyncTestId/fetchAsyncThunk', async (formData, { rejectWithValue }) => {
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



export const updateAsyncTest= createAsyncThunk<
  MyData,
  { url: string },
  {
    rejectValue: MyKnownError
  }
>('updateTest/updateAsyncThunk', async (formData, { rejectWithValue }) => {
  const { url, ...data } = formData
  try {
    const response = await axios.put(config.baseUrl + url, data, {
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

export interface ITest {
  data: any[] | null
  loading: string
  error: null | string
}

const initialState = {
  data: null,
  loading: 'IDLE',
  error: ''
} as ITest

const TestSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAsyncTestId.pending, state => {
      // The type signature on action.payload matches what we passed into the generic for `normalize`, allowing us to access specific properties on `payload.articles` if desired
      state.loading = HTTP_STATUS.PENDING
    })
    builder.addCase(fetchAsyncTestId.fulfilled, (state, { payload }) => {
      state.loading = HTTP_STATUS.FULFILLED
      state.data = payload.records
    })
    builder.addCase(fetchAsyncTestId.rejected, (state, action: PayloadAction<any>) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
        state.error = action.payload.errorMessage
      } else {
        // state.error = action.error
      }
    }),
    builder.addCase(updateAsyncTest.pending, state => {
      // The type signature on action.payload matches what we passed into the generic for `normalize`, allowing us to access specific properties on `payload.articles` if desired
      state.loading = HTTP_STATUS.PENDING
    })
    builder.addCase(updateAsyncTest.fulfilled, (state, { payload }) => {
      state.loading = HTTP_STATUS.FULFILLED
      // state.data = payload.data
    })
    builder.addCase(updateAsyncTest.rejected, (state, action: PayloadAction<any>) => {
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

export const getBomData = (state: RootState) => state.testmode?.data
export default TestSlice.reducer
