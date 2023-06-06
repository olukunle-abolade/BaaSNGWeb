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

interface IPAttributes {
  ip: string,
}

interface MyKnownError {
  errorMessage: string
}

const headers = {
  'Content-Type': 'application/json',
  'X-API-Key': process.env.NEXT_PUBLIC_BAAS_API_KEY
}

export const fetchAsyncIP = createAsyncThunk<
  MyData,
  { url: string } ,
  {
    rejectValue: MyKnownError
  }
>('fetchIP/fetchAsyncThunk', async (formData, { rejectWithValue }) => {
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

export const postAsyncIP = createAsyncThunk<
  MyData,
  { url: string } & Partial<IPAttributes>,
  {
    rejectValue: MyKnownError
  }
>('postIP/postAsyncThunk', async (formData, { rejectWithValue }) => {
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



export const updateAsyncIP = createAsyncThunk<
  MyData,
  { url: string },
  {
    rejectValue: MyKnownError
  }
>('updateIP/updateAsyncThunk', async (formData, { rejectWithValue }) => {
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

export const deleteAsyncIP = createAsyncThunk<
  MyData,
  { url: string },
  {
    rejectValue: MyKnownError
  }
>('deleteIP/deleteAsyncThunk', async (formData, { rejectWithValue }) => {
  const { url} = formData
  try {
    const response = await axios.delete(config.baseUrl + url, {
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

export interface IP {
  data: any[] | null
  loading: string
  error: null | string
}

const initialState = {
  data: null,
  loading: 'IDLE',
  error: ''
} as IP

const IpWhitelist = createSlice({
  name: 'ipwhitelist',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAsyncIP.pending, state => {
      // The type signature on action.payload matches what we passed into the generic for `normalize`, allowing us to access specific properties on `payload.articles` if desired
      state.loading = HTTP_STATUS.PENDING
    })
    builder.addCase(fetchAsyncIP.fulfilled, (state, { payload }) => {
      state.loading = HTTP_STATUS.FULFILLED
      state.data = payload.records
    })
    builder.addCase(fetchAsyncIP.rejected, (state, action: PayloadAction<any>) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
        state.error = action.payload.errorMessage
      } else {
        // state.error = action.error
      }
    }),
    builder.addCase(postAsyncIP.pending, state => {
      // The type signature on action.payload matches what we passed into the generic for `normalize`, allowing us to access specific properties on `payload.articles` if desired
      state.loading = HTTP_STATUS.PENDING
    })
    builder.addCase(postAsyncIP.fulfilled, (state, { payload }) => {
      state.loading = HTTP_STATUS.FULFILLED
      state.data = payload.data
    })
    builder.addCase(postAsyncIP.rejected, (state, action: PayloadAction<any>) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
        state.error = action.payload.errorMessage
      } else {
        // state.error = action.error
      }
    }),
    builder.addCase(updateAsyncIP.pending, state => {
      // The type signature on action.payload matches what we passed into the generic for `normalize`, allowing us to access specific properties on `payload.articles` if desired
      state.loading = HTTP_STATUS.PENDING
    })
    builder.addCase(updateAsyncIP.fulfilled, (state, { payload }) => {
      state.loading = HTTP_STATUS.FULFILLED
      // state.data = payload.data
    })
    builder.addCase(updateAsyncIP.rejected, (state, action: PayloadAction<any>) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
        state.error = action.payload.errorMessage
      } else {
        // state.error = action.error
      }
    }),
    builder.addCase(deleteAsyncIP.pending, state => {
      // The type signature on action.payload matches what we passed into the generic for `normalize`, allowing us to access specific properties on `payload.articles` if desired
      state.loading = HTTP_STATUS.PENDING
    })
    builder.addCase(deleteAsyncIP.fulfilled, (state, { payload }) => {
      state.loading = HTTP_STATUS.FULFILLED
      // state.data = payload.data
    })
    builder.addCase(deleteAsyncIP.rejected, (state, action: PayloadAction<any>) => {
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

export const getIpData = (state: RootState) => state.ipwhitelist?.data;
export default IpWhitelist.reducer
