import { RootState } from '@/store'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import config from '@/configs/config'
import { HTTP_STATUS } from '@/constants'


interface MyData {
  message: string
  data: any[]
}

// SIGN UP
interface ProfileAttributes {
  token: string
}

interface MyKnownError {
  errorMessage: string
}

const headers = {
  'Content-Type': 'application/json',
  'X-API-Key': process.env.NEXT_PUBLIC_BAAS_API_KEY
}

export const fetchAsyncProfile = createAsyncThunk<
  MyData,
  { url: string } & Partial<ProfileAttributes>,
  {
    rejectValue: MyKnownError
  }
>('user/postAsyncThunk', async (formData, { rejectWithValue }) => {
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

export interface IProfile {
  data: any[] | null
  loading: string
  error: null | string
}

const initialState = {
  data: null,
  loading: 'IDLE',
  error: ''
} as IProfile

const UserSlice = createSlice({
  name: 'helpdesk',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAsyncProfile.pending, state => {
      // The type signature on action.payload matches what we passed into the generic for `normalize`, allowing us to access specific properties on `payload.articles` if desired
      state.loading = HTTP_STATUS.PENDING
    })
    builder.addCase(fetchAsyncProfile.fulfilled, (state, { payload }) => {
      state.loading = HTTP_STATUS.FULFILLED
      state.data = payload.data
    })
    builder.addCase(fetchAsyncProfile.rejected, (state, action: PayloadAction<any>) => {
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

// export const getBomData = (state) => state?.bom?.data?.data;
export default UserSlice.reducer
