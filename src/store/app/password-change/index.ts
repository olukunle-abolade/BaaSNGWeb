import { RootState } from '@/store'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import config from '@/configs/config'
import { HTTP_STATUS } from '@/constants'


export interface MyData {
  message: string
  code: number;
  data: any[]
}

interface PasswordAttributes {
  email: string,
  password: string,
  newPassword: string
}

interface MyKnownError {
  errorMessage: string
}

const headers = {
  'Content-Type': 'application/json',
  'X-API-Key': process.env.NEXT_PUBLIC_BAAS_API_KEY
}

export const postAsyncPasswordChange = createAsyncThunk<
  MyData,
  { url: string } & Partial<PasswordAttributes>,
  {
    rejectValue: MyKnownError
  }
>('postPasswordChange/postAsyncThunk', async (formData, { rejectWithValue }) => {
  const { url, ...data } = formData
  console.log(data)
  try {
    const response = await axios.post(config.baseUrl + url, 
      {
        email: data.email,
        password: data.password,
        newPassword: data.newPassword
      }, 
      {
      headers: headers,
      withCredentials: true,
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

export interface IPasswordChange {
  data: any[] | null
  loading: string
  error: null | string
}

const initialState = {
  data: null,
  loading: 'IDLE',
  error: ''
} as IPasswordChange

const PasswordChangeSlice = createSlice({
  name: 'passwordchange',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(postAsyncPasswordChange.pending, state => {
      // The type signature on action.payload matches what we passed into the generic for `normalize`, allowing us to access specific properties on `payload.articles` if desired
      state.loading = HTTP_STATUS.PENDING
    })
    builder.addCase(postAsyncPasswordChange.fulfilled, (state, { payload }) => {
      state.loading = HTTP_STATUS.FULFILLED
      state.data = payload.data
    })
    builder.addCase(postAsyncPasswordChange.rejected, (state, action: PayloadAction<any>) => {
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

export default PasswordChangeSlice.reducer
