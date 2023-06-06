export type ErrCallbackType = (err: { [key: string]: string }) => void

export type LoginParams = {
  email?: string
  password: string
  rememberMe?: boolean
}

export type SignupOtp = {
  email?: string 
  rememberMe?: boolean
  otp?: string 
}

export type UserDataType = {
  id?: number
  permission?: string[]
  role?: string
  email?: string
  username?: string
  password?: string
}

export type ProfileDataType = {
  fullName?: string
  username?: string
  password?: string
  gender?: string
  dob?:string
  nationality?: string
  phone?: string
  address?: string
  idtype?: string
  idno?: string
  occupation?: string
  bussiness_name?: string
  reg_number?: string
  business_number?: string
  business_name?: string
  business_email?: string
  business_website?: string
  business_address?: string
  business_type?: string
  business_industry?: string
  sounces?: string
  purpose_of_account?: string
}

export type StepperValuesType = {
  userData: ProfileDataType | null
  setUserData: (value: ProfileDataType | null) => void
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
