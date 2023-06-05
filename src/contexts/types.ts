export type ErrCallbackType = (err: { [key: string]: string }) => void

export type LoginParams = {
  email: string
  password: string
  rememberMe?: boolean
}

export type SignupOtp = {
  email: string 
  rememberMe?: boolean
  otp?: string 
}

export type UserDataType = {
  id?: number
  permission?: string[]
  role?: string
  email: string
  fullName?: string
  username?: string
  password?: string
}

export type AuthValuesType = {
  loading: boolean
  token: string
  logout: () => void
  user: UserDataType | null
  setLoading: (value: boolean) => void
  setUser: (value: UserDataType | null) => void
  pass: (params: LoginParams, errorCallback?: ErrCallbackType) => void
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void
  signup: (params: SignupOtp, errorCallback?: ErrCallbackType) => void
  otp: (params: SignupOtp, errorCallback?: ErrCallbackType) => void
}
